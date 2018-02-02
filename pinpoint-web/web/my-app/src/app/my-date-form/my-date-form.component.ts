import {Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Http} from "@angular/http";
import {EffectivesService} from "../effectives.service";
import {Performance} from "../performance";
import {DatePipe} from "@angular/common";
import {ApplicationsService} from "../applications.service";
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-my-date-form',
  templateUrl: './my-date-form.component.html',
  styleUrls: ['./my-date-form.component.css'],
  providers: [
    DatePipe, //日期格式化组件
  ]
})
export class MyDateFormComponent implements OnInit {
  dateForm: FormGroup;
  performances: Performance[] = [];
  similarList: Observable<string[]>;  //相似模块名称可观测集合
  appsList: string[] = [];            //模块名称集合

  src: string;  //未超过当前时间的第5分钟开始区间
  dst: string;  //未超过当前时间的第5分钟结束区间

  private searchTerms = new Subject<string>();

  constructor(private http: Http,
              private effectiveService: EffectivesService,
              private applicationService: ApplicationsService,
              private datePipe: DatePipe) {}

  ngOnInit() {
    //初始化工作
    this.init();
    //表单预填
    this.patchValues();
    //设置监听
    this.initKeyboardListener()
  }

  /*
      全量初始化
   */
  init(): void {
    //初始化表单组件
    this.initComponent();
    //初始化表单填值
    this.initVariables();
  }

  /*
      初始化变量
   */
  initVariables(): void {
    //表单时间变量填值
    let src: Date; //未超过当前时间的第5分钟开始区间
    let dst: Date; //未超过当前时间的第5分钟结束区间
    let periodIn5: number = 5 * 60; // 5分钟时间段的unix戳
    let secs = new Date().getTime() / 1000;
    let date: Date = new Date();
    let format: string = "yyyy-MM-dd HH:mm";  //转换格式
    src = new Date((secs - periodIn5 - secs % 300) * 1000);   //开始段时间设置
    dst = new Date((secs - secs % 300) * 1000);               //结束段时间设置

    this.src = this.datePipe.transform(src, format);
    this.dst = this.datePipe.transform(dst, format);
    console.log("src after format: " + this.src);
    console.log("dst after format: " + this.dst);

    //列表名称变量填值
    this.applicationService.getApplications()
      .subscribe(apps => {
        this.appsList = apps;
        //调试输出
        console.log(apps);
      })
  }

  /*
      初始化键盘监听
   */
  initKeyboardListener(): void {
    this.similarList = this.searchTerms.pipe(
      //每次键盘落下后等待300ms
      debounceTime(300),
      //取消检索无变化参数
      distinctUntilChanged(),
      //调用模糊匹配
      switchMap((term: string) =>
        this.applicationService.getApplicationsBySimilar(term)
      )
    )
  }

  /*
      初始化表单组件
   */
  initComponent(): void {
    this.dateForm = new FormGroup({
      startTime: new FormControl(),
      endTime: new FormControl(),
      appName: new FormControl()
    })
  }

  /*
      初始填充值规则：
   */
  patchValues(): void {
    if (this.dateForm) {
      this.dateForm.patchValue({
        startTime: this.src,  //开始段区间
        endTime: this.dst   //结束段区间
      })
    }
    /*
        实时监听值变动并记录
    */
    this.dateForm.valueChanges.subscribe((data) => {
      console.log('Form Value Changed:', data);
    })
  }

  /*
      根据开始时间、结束时间以及模块名称查询性能AppUriEffective
   */
  queryByConditions(): void {
    //调试信息
    console.log(this.dateForm.value.startTime,
      this.dateForm.value.endTime, this.dateForm.value.appName);
    this.effectiveService.getEffectivesByConditions(this.dateForm.value.startTime,
      this.dateForm.value.endTime, this.dateForm.value.appName)
      .subscribe(effectives => {
        this.performances = effectives;
        //调试回调参数
        console.log(effectives);
      })
  }

  /*
      将检索值推入observable流
   */
  search(term: string): void {
    this.searchTerms.next(term);
  }
}

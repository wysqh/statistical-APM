import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DatePipe} from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {EffectivesService} from '../../../@core/data/effectives.service';
import {ApplicationsService} from '../../../@core/data/applications.service';
import {Performance} from '../../../@core/data/performance';
import {
  debounceTime, distinctUntilChanged, switchMap,
} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ngx-ays-query',
  templateUrl: './app-ays-query.component.html',
  styleUrls: ['./app-ays-query.component.scss'],
  providers: [
    DatePipe, // 日期格式化组件
  ],
})
export class AppAysQueryComponent implements OnInit {
  dateForm: FormGroup;
  @Output() performanceOutLists = new EventEmitter(); // 子控件发射器
  performances: Performance[] = [];
  similarList: Observable<string[]>;  // 相似模块名称可观测集合
  appsList: string[] = [];            // 模块名称集合

  src: string;  // 未超过当前时间的第5分钟开始区间
  dst: string;  // 未超过当前时间的第5分钟结束区间

  bVisible: boolean = false; // <li></li>不可见性

  private searchTerms = new Subject<string>();

  constructor(private http: HttpClient,
              private effectiveService: EffectivesService,
              private applicationService: ApplicationsService,
              private datePipe: DatePipe) {}

  ngOnInit() {
    // 初始化工作
    this.init();
    // 表单预填
    this.patchValues();
    // 设置监听
    this.initKeyboardListener()
  }

  /*
      全量初始化
   */
  init(): void {
    // 初始化表单组件
    this.initComponent();
    // 初始化表单填值
    this.initVariables();
  }

  /*
      初始化变量
   */
  initVariables(): void {
    // 表单时间变量填值
    let src: Date; // 未超过当前时间的第5分钟开始区间
    let dst: Date; // 未超过当前时间的第5分钟结束区间
    const periodIn5: number = 5 * 60; // 5分钟时间段的unix戳
    const secs = new Date().getTime() / 1000;
    const format: string = 'yyyy-MM-dd HH:mm';  // 转换格式
    src = new Date((secs - periodIn5 - secs % 300) * 1000);   // 开始段时间设置
    dst = new Date((secs - secs % 300) * 1000);               // 结束段时间设置

    this.src = this.datePipe.transform(src, format);
    this.dst = this.datePipe.transform(dst, format);
    console.log('src after format: ' + this.src);
    console.log('dst after format: ' + this.dst);

    // 列表名称变量填值
    this.applicationService.getApplications()
      .subscribe(apps => {
        this.appsList = apps;
        // 调试输出
        console.log(apps);
      })
  }

  /*
      初始化键盘监听
   */
  initKeyboardListener(): void {
    this.similarList = this.searchTerms.pipe(
      // 每次键盘落下后等待300ms
      debounceTime(300),
      // 取消检索无变化参数
      distinctUntilChanged(),
      // 调用模糊匹配
      switchMap((term: string) =>
        this.applicationService.getApplicationsBySimilar(term),
      ),
    )
  }

  /*
      初始化表单组件
   */
  initComponent(): void {
    this.dateForm = new FormGroup({
      startTime: new FormControl(),
      endTime: new FormControl(),
      appName: new FormControl(),
    })
  }

  /*
      初始填充值规则：
   */
  patchValues(): void {
    if (this.dateForm) {
      this.dateForm.patchValue({
        startTime: this.src,  // 开始段区间
        endTime: this.dst,   // 结束段区间
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
    // 调试信息
    console.log(this.dateForm.value.startTime,
      this.dateForm.value.endTime, this.dateForm.value.appName);
    // 检查参数完整性
    if (this.dateForm.value.startTime === null ||
        this.dateForm.value.end === null ||
        this.dateForm.value.appName === null) {
      // 现阶段采用Console.log弹出提示,后续采用Modal或者Toast形式
          console.log('query param should not be null');
          return;
    }
    this.effectiveService.getEffectivesByConditions(this.dateForm.value.startTime,
      this.dateForm.value.endTime, this.dateForm.value.appName)
      .subscribe(effectives => {
        this.performances = effectives;
        // 调试回调参数
        console.log(effectives);
        // 将子控件获取的变量发射至父控件
        this.performanceOutLists.emit(this.performances);
      })
  }

  /*
      将检索值推入observable流
   */
  search(term: string): void {
    this.searchTerms.next(term);
  }

  /*
      触发点击事件将值回填
   */
  patchAppName(app: string): void {
    this.dateForm.patchValue({
      appName: app,
    });
    // 去除li的可见性
    this.bVisible = true;
    console.log(this.bVisible);
  }

  /*
      重新获取li可见性
   */
  activateVisibility(): void {
    // 重新获取模块可见性
    this.bVisible = false;
  }
}

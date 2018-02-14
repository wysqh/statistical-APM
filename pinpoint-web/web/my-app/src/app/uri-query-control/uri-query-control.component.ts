import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BsLocaleService} from "ngx-bootstrap";
import {DatePipe} from "@angular/common";
import {UriCheckServiceService} from "../uri-check-service.service";
import {UriPerformance} from "../UriPerformance";
import {BaseResult} from "../base-result";

@Component({
  selector: 'app-uri-query-control',
  templateUrl: './uri-query-control.component.html',
  styleUrls: ['./uri-query-control.component.css'],
  providers: [
    DatePipe, //日期格式化组件
  ]
})
export class UriQueryControlComponent implements OnInit {
  locale = 'en'; //时区设置
  baseResult: BaseResult<UriPerformance> = new BaseResult<UriPerformance>();  //后端返回的数据格式

  @Output() uriPerformanceLists = new EventEmitter();   //子控件发射器

  minDate: Date = new Date(2000, 1, 1);   //限制最小日期
  maxDate: Date = new Date(2018, 12, 31); //限制最大日期

  bsValue: Date = new Date(); //默认当前日期

  searchForm: FormGroup; //表单数据

  constructor(private _localService: BsLocaleService,
              private datePipe: DatePipe,
              private uriCheckServiceService: UriCheckServiceService) { }

  ngOnInit() {
    // this.applyLocale();
    //初始化工作
    this.initComponent();
    //表单预填
    this.patchValues();

  }

  /*
       初始化表单组件
   */
  initComponent(): void {
    this.searchForm = new FormGroup({
      appName: new FormControl(),
      appUri: new FormControl(),
      date: new FormControl()
    });
    console.log(this.bsValue);
  }

  /*
      初始填充值规则：
   */
  patchValues(): void {
    let format: string = "yyyy-MM-dd";

    if (this,this.searchForm) {
      this.searchForm.patchValue({
        date: this.datePipe.transform(this.bsValue, format) //格式转换
      })
    }
  }

  /*
      监听查询事件
   */
  queryUriByConditions(): void {
    //调试信息
    console.log(this.searchForm.value.appName,
      this.searchForm.value.appUri, this.searchForm.value.date)
    this.uriCheckServiceService.getTodayUriPerformance(this.searchForm.value.appName,
      this.searchForm.value.appUri, this.searchForm.value.date)
      .subscribe(data => {
        this.baseResult = data;
        //测试回调参数
        console.log(data);
        //将参数发射至父控件
        if (this.baseResult.status) {
          this.uriPerformanceLists.emit(this.baseResult.data);
        } else {
          console.log(this.baseResult.message);
        }
      })
  }

  /*
      区域设置
   */
  applyLocale(): void {
    this._localService.use(this.locale);
  }
}

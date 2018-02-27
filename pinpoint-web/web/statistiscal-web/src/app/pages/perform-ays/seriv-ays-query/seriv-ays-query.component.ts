import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DatePipe} from '@angular/common';
import {BaseResult} from '../../../@core/data/base-result';
import {UriPerformance} from '../../../@core/data/uri-performance';
import {FormControl, FormGroup} from '@angular/forms';
import {BsLocaleService} from 'ngx-bootstrap';
import {UriCheckService} from '../../../@core/data/uri-check.service';

@Component({
  selector: 'ngx-seriv-ays-query',
  templateUrl: './seriv-ays-query.component.html',
  styleUrls: ['./seriv-ays-query.component.scss'],
  providers: [
    DatePipe, // 日期格式化组件
  ],
})
export class SerivAysQueryComponent implements OnInit {
  locale = 'en'; // 时区设置
  baseResult: BaseResult<UriPerformance> = new BaseResult<UriPerformance>();  // 后端返回的数据格式

  @Output() uriPerformanceLists = new EventEmitter();   // 子控件发射器

  minDate: Date = new Date(2000, 1, 1);   // 限制最小日期
  maxDate: Date = new Date(2018, 12, 31); // 限制最大日期

  bsValue: Date = new Date(); // 默认当前日期

  searchForm: FormGroup; // 表单数据

  constructor(private _localService: BsLocaleService,
              private datePipe: DatePipe,
              private uriCheckService: UriCheckService) { }

  ngOnInit() {
    // this.applyLocale();
    // 初始化工作
    this.initComponent();
    // 表单预填
    this.patchValues();

  }

  /*
       初始化表单组件
   */
  initComponent(): void {
    this.searchForm = new FormGroup({
      appName: new FormControl(),
      appUri: new FormControl(),
      date: new FormControl(),
    });
    console.log(this.bsValue);
  }

  /*
      初始填充值规则：
   */
  patchValues(): void {
    const format: string = 'yyyy-MM-dd';

    if (this, this.searchForm) {
      this.searchForm.patchValue({
        date: this.datePipe.transform(this.bsValue, format), // 格式转换
      })
    }
  }

  /*
      监听查询事件
   */
  queryUriByConditions(): void {
    // 后续日期格式转换以适应后端接口要求
    const format: string = 'yyyyMMdd';
    // 调试信息
    console.log(this.searchForm.value.appName,
      this.searchForm.value.appUri, this.searchForm.value.date)
    // 测试用Mock地址
    // this.uriCheckService.getTodayUriPerformance(this.searchForm.value.appName,
    //   this.searchForm.value.appUri, this.searchForm.value.date)
    console.log(this.datePipe.transform(this.searchForm.value.date, format)); // 测试格式转换是否正确
    // 后端接口地址
      this.uriCheckService.getTodayUriPerformanceFromServer(this.searchForm.value.appName,
        this.searchForm.value.appUri, this.datePipe.transform(this.searchForm.value.date, format))
      .subscribe(data => {
        this.baseResult = data;
        // 测试回调参数
        console.log(data);
        // 将参数发射至父控件
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

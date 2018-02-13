import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BsLocaleService} from "ngx-bootstrap";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-uri-query-control',
  templateUrl: './uri-query-control.component.html',
  styleUrls: ['./uri-query-control.component.css'],
  providers: [
    DatePipe, //日期格式化组件
  ]
})
export class UriQueryControlComponent implements OnInit {
  locale = 'en';

  minDate: Date = new Date(2000, 1, 1);   //限制最小日期
  maxDate: Date = new Date(2018, 12, 31); //限制最大日期

  bsValue: Date = new Date(); //默认当前日期

  searchForm: FormGroup; //表单数据

  constructor(private _localService: BsLocaleService,
              private datePipe: DatePipe) { }

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

  }

  /*
      区域设置
   */
  applyLocale(): void {
    this._localService.use(this.locale);
  }
}

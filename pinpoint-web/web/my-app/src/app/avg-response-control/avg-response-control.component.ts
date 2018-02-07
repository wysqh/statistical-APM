import { Component, OnInit } from '@angular/core';
import {BaseResult} from "../base-result";
import {AvgResponse} from "../avg-rsp";
import {Subject} from "rxjs/Subject";
import {LastPerformanceService} from "../last-performance.service";

@Component({
  selector: 'app-avg-response-control',
  templateUrl: './avg-response-control.component.html',
  styleUrls: ['./avg-response-control.component.css']
})
export class AvgResponseControlComponent implements OnInit {
  baseResult: BaseResult<AvgResponse> = new BaseResult<AvgResponse>();   //后端返回的数据格式

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private lastPerformanceService: LastPerformanceService) { }

  ngOnInit() {
    //初始化dtTables
    this.dtOptions = {
      pagingType: 'simple',
      pageLength: 10,
    }

    //测试mock json
    this.getMockAvgRspData();
  }

  /*
      获取mock数据
   */
  getMockAvgRspData(): void {
    this.lastPerformanceService.getMockAvgRsp()
      .subscribe(base => {
        this.baseResult = base;
        //测试回调参数
        console.log(base);
        //设置dtTables
        this.dtTrigger.next();
      });
  }

}

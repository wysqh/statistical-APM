import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {BaseResult} from "../base-result";
import {LastPerformanceService} from "../last-performance.service";
import {MaxRequest} from "../max-req";

@Component({
  selector: 'app-max-request-control',
  templateUrl: './max-request-control.component.html',
  styleUrls: ['./max-request-control.component.css']
})
export class MaxRequestControlComponent implements OnInit {
  baseResult: BaseResult<MaxRequest> = new BaseResult<MaxRequest>(); //后端返回的数据格式

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
    this.getMockMaxReqData();
  }

  /*
      获取mock数据
   */
  getMockMaxReqData(): void{
    this.lastPerformanceService.getMockMaxReq()
      .subscribe(base => {
        this.baseResult = base;
        //测试回调参数
        console.log(base);
        //设置dtTables
        this.dtTrigger.next();
      })
  }
}

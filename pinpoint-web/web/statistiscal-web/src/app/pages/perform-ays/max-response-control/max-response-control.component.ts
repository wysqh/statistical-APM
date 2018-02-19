import { Component, OnInit } from '@angular/core';
import {BaseResult} from '../../../@core/data/base-result';
import {MaxResponse} from '../../../@core/data/max-rsp';
import {Subject} from 'rxjs/Subject';
import {LastPerformanceService} from '../../../@core/data/last-performance.service';

@Component({
  selector: 'ngx-max-response-control',
  templateUrl: './max-response-control.component.html',
  styleUrls: ['./max-response-control.component.scss'],
})
export class MaxResponseControlComponent implements OnInit {
  baseResult: BaseResult<MaxResponse[]> = new BaseResult<MaxResponse[]>(); // 后端返回的数据格式

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private lastPerformanceService: LastPerformanceService) { }

  ngOnInit() {
    // 初始化dtTables
    this.dtOptions = {
      pagingType: 'simple',
      pageLength: 10,
    }

    // 测试mock json
    this.getMockMaxRspData();
  }

  /*
     获取mock数据
   */
  getMockMaxRspData(): void {
    this.lastPerformanceService.getMockMaxRsp()
      .subscribe(base => {
        this.baseResult = base;
        // 测试回调参数
        console.log(base);
        // 设置dtTables
        this.dtTrigger.next();
      })
  }
}

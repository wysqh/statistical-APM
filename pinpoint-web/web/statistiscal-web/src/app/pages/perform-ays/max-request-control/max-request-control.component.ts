import { Component, OnInit } from '@angular/core';
import {BaseResult} from '../../../@core/data/base-result';
import {MaxRequest} from '../../../@core/data/max-req';
import {Subject} from 'rxjs/Subject';
import {LastPerformanceService} from '../../../@core/data/last-performance.service';


@Component({
  selector: 'ngx-max-request-control',
  templateUrl: './max-request-control.component.html',
  styleUrls: ['./max-request-control.component.scss'],
})
export class MaxRequestControlComponent implements OnInit {
  baseResult: BaseResult<MaxRequest[]> = new BaseResult<MaxRequest[]>(); // 后端返回的数据格式

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
    this.getMockMaxReqData();
  }

  /*
      获取mock数据
   */
  getMockMaxReqData(): void {
    this.lastPerformanceService.getMockMaxReq()
      .subscribe(base => {
        this.baseResult = base;
        // 测试回调参数
        console.log(base);
        // 设置dtTables
        this.dtTrigger.next();
      })
  }
}

import {UriPerformance} from "../UriPerformance";
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {DataTableDirective} from "angular-datatables";

@Component({
  selector: 'app-uri-performance-query',
  templateUrl: './uri-performance-query.component.html',
  styleUrls: ['./uri-performance-query.component.css']
})
export class UriPerformanceQueryComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();

  uriPerformanceLists: UriPerformance = new UriPerformance();

  constructor() { }

  ngOnInit() {
    //初始化变量
    this.initVariables()

    //初始化dtTables
    this.dtOptions = {
      pagingType: 'simple',
      pageLength: 30
    };
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  initVariables(): void {
    this.uriPerformanceLists.appName = "";
    this.uriPerformanceLists.uri = "";
    this.uriPerformanceLists.lists = [];
  }

  //接受子控件回传变量
  revDataFromChild(event):void {
    this.uriPerformanceLists = event;
    //数据变更重新渲染
    this.rerender();
  }

  //表格重渲染
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      //销毁表
      dtInstance.destroy();
      //重新渲染
      this.dtTrigger.next();
    })
  }
}

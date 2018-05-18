import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {DataTableDirective} from 'angular-datatables';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();

  constructor() { }

  ngOnInit() {
    // 初始化dtTables
    this.dtOptions = {
      pagingType: 'simple',
      pageLength: 30,
    };
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  // 表格重渲染
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // 销毁表
      dtInstance.destroy();
      // 重新渲染
      this.dtTrigger.next();
    })
  }
}

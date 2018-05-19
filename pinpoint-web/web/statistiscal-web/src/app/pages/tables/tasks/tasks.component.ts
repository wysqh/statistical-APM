import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {DataTableDirective} from 'angular-datatables';
import {NerServiceService} from '../../../@core/data/ner-service.service';
import {TaskHistory} from '../../../@core/data/task-history';
import {DatePipe} from '@angular/common';
import {UserInfoService} from '../../../@core/data/user-info.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers: [
    DatePipe,
  ],
})
export class TasksComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();

  tasks: TaskHistory[] = [];

  constructor(private nerService: NerServiceService,
              private datePipe: DatePipe,
              private userInfo: UserInfoService) { }

  ngOnInit() {
    // 初始化dtTables
    this.dtOptions = {
      pagingType: 'simple',
      pageLength: 30,
    };
    // 请求列表参数
    this.queryTaskHistory();
    console.log(this.userInfo.getUserInfo());
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

  // 查询记录
  queryTaskHistory(): void {
    // 后端接口地址
    this.nerService.getHistoryTask()
      .subscribe(base => {
        // 测试回调参数
        console.log(base);
        if (base.status) {
          console.log(base.message);
          this.tasks = base.data;
        } else {
          console.log(base.message);
        }
      })
  }
}

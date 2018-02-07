import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Http, Response} from "@angular/http";
import {EffectivesService} from "../effectives.service";
import {Performance} from "../performance";
import {DataTableDirective} from "angular-datatables";

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  performances: Performance[] = [];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private http: Http,
              private effectiveService: EffectivesService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.effectiveService.getEffectives()
      .subscribe(effectives => {
        this.performances = effectives
        this.dtTrigger.next();
      })

    /*
        Test Mock Data
     */
    // this.http.get('mock-data/effectives.json')
    //   .map(res => res.json())
    //   .subscribe(effectives => {    //     this.performances = effectives;
    //     console.log("hello");
    //     console.log(effectives);
    //     console.log(this.performances);
    //     this.dtTrigger.next();
    //   })
  }

  //接受子控件回传变量
  revDateFromChild(event):void {
    this.performances = event;
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

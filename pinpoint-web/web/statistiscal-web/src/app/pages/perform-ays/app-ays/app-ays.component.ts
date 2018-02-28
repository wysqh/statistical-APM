import {Component, OnInit, ViewChild} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs/Subject';
import {Http} from '@angular/http';
import {EffectivesService} from '../../../@core/data/effectives.service';
import {Performance} from '../../../@core/data/performance';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'ngx-app-ays',
  templateUrl: './app-ays.component.html',
  styleUrls: ['./app-ays.component.scss'],
})
export class AppAysComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  performances: Performance[] = [];
  dtTrigger: Subject<any> = new Subject<any>();
  sanitizer: DomSanitizer;  // 引入DomSanitizer信任动态加载Url链接

  constructor(private http: Http,
              private effectiveService: EffectivesService,
              private domSanitizer: DomSanitizer) {
    this.sanitizer = domSanitizer;
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    console.log('Entering OnInit');
    // 第一次请求获取一次空数据
    this.effectiveService.getEmptyEffectives()
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

  // 接受子控件回传变量
  revDateFromChild(event): void {
    this.performances = event;
    // 数据变更重新渲染
    this.rerender();
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

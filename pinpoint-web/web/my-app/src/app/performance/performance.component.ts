import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Http, Response} from "@angular/http";
import {EffectivesService} from "../effectives.service";
import {Performance} from "../performance";

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  performances: Performance[] = [];
  dtTrigger: Subject<any> = new Subject();

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
    // this.http.get('mock-data/effectives.json')
    //   .map(res => res.json())
    //   .subscribe(effectives => {    //     this.performances = effectives;
    //     console.log("hello");
    //     console.log(effectives);
    //     console.log(this.performances);
    //     this.dtTrigger.next();
    //   })
  }
}

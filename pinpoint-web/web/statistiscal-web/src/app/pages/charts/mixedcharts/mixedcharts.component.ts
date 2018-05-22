import { Component, OnInit } from '@angular/core';
import {ChartService} from '../../../@core/data/chart.service';

@Component({
  selector: 'app-mixedcharts',
  templateUrl: './mixedcharts.component.html',
  styleUrls: ['./mixedcharts.component.scss'],
})
export class MixedchartsComponent implements OnInit {

  constructor(private chart: ChartService) { }

  threads: string[];

  ngOnInit() {
    this.chart.getSingleTaskDistribution()
      .subscribe(base => {
        const data = base.data;
        this.threads = data.labels;
      })
  }

}

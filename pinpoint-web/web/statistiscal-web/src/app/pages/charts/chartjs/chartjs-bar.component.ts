import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import {ChartService} from '../../../@core/data/chart.service';
import {VN} from '../../../@core/data/KN';

@Component({
  selector: 'ngx-chartjs-bar',
  template: `
    <chart type="bar" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsBarComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService,
              private chart: ChartService) {
    this.chart.getCPUoccupation()
      .subscribe(base => {
        const data: VN<number, number>[] = base.data;
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

          const colors: any = config.variables;
          const chartjs: any = config.variables.chartjs;

          this.data = {
            labels: ['fetch-1', 'fetch-2', 'fetch-3', 'fetch-4', 'fetch-5', 'fetch-6', 'fetch-7'],
            datasets: [{
              data: data.map(function (item) {
                return item.value;
              }),
              label: 'Process CPU(%)',
              backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
            }, {
              data: data.map(function (item) {
                return item.name;
              }),
              label: 'Other CPU(%)',
              backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
            }],
          };

          this.options = {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
              labels: {
                fontColor: chartjs.textColor,
              },
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false,
                    color: chartjs.axisLineColor,
                  },
                  ticks: {
                    fontColor: chartjs.textColor,
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    display: true,
                    color: chartjs.axisLineColor,
                  },
                  ticks: {
                    fontColor: chartjs.textColor,
                  },
                },
              ],
            },
          };
        });
      })
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

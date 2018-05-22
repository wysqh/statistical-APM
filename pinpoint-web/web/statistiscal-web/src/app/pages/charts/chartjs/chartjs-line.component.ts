import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import {ChartService} from '../../../@core/data/chart.service';

@Component({
  selector: 'ngx-chartjs-line',
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsLineComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService,
              private charService: ChartService) {
    this.charService.getMemAlloc()
      .subscribe(base => {
        const data = base.data;
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

          const colors: any = config.variables;
          const chartjs: any = config.variables.chartjs;

          this.data = {
            labels: ['#1(M)', '#2(M)', '#3(M)', '#4(M)', '#5(M)', '#6(M)', '#7(M)'],
            datasets: [{
              data: data.injectList,
              label: 'inject',
              backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
              borderColor: colors.primary,
            }, {
              data: data.fetchList,
              label: 'fetch',
              backgroundColor: NbColorHelper.hexToRgbA(colors.danger, 0.3),
              borderColor: colors.danger,
            }, {
              data: data.parseList,
              label: 'parse',
              backgroundColor: NbColorHelper.hexToRgbA(colors.info, 0.3),
              borderColor: colors.info,
            },
            ],
          };

          this.options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [
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
            legend: {
              labels: {
                fontColor: chartjs.textColor,
              },
            },
          };
        });
      })
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

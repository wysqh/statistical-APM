import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {ChartService} from '../../../@core/data/chart.service';

@Component({
  selector: 'ngx-chartjs-multiple-xaxis',
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsMultipleXaxisComponent implements OnDestroy {
  data: {};
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService,
              private charService: ChartService) {
    this.charService.getDisCpuOcc()
      .subscribe(base => {
        const data = base.data;
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

          const colors: any = config.variables;
          const chartjs: any = config.variables.chartjs;

          this.data = {
            labels: ['#1', '#2', '#3', '#4', '#5', '#6', '#7'],
            datasets: [{
              label: 'Inject Job',
              data: data.injectList,
              borderColor: colors.primary,
              backgroundColor: colors.primary,
              fill: false,
              borderDash: [5, 5],
              pointRadius: 8,
              pointHoverRadius: 10,
            }, {
              label: 'Generate Job',
              data: data.generateList,
              borderColor: colors.dangerLight,
              backgroundColor: colors.dangerLight,
              fill: false,
              borderDash: [5, 5],
              pointRadius: 8,
              pointHoverRadius: 10,
            }, {
              label: 'Fetch Job',
              data: data.fetchList,
              borderColor: colors.info,
              backgroundColor: colors.info,
              fill: false,
              pointRadius: 8,
              pointHoverRadius: 10,
            }, {
              label: 'Parse Job',
              data: data.parseList,
              borderColor: colors.success,
              backgroundColor: colors.success,
              fill: false,
              pointRadius: 8,
              pointHoverRadius: 10,
            }],
          };

          this.options = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              position: 'bottom',
              labels: {
                fontColor: chartjs.textColor,
              },
            },
            hover: {
              mode: 'index',
            },
            scales: {
              xAxes: [
                {
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: '#Iterator',
                  },
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
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Percentage(%)',
                  },
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

  private random() {
    return Math.round(Math.random() * 100);
  }
}

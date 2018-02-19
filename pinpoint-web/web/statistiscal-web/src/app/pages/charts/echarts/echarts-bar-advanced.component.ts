import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {ChartService} from '../../../@core/data/chart.service';

@Component({
  selector: 'ngx-echarts-bar-advanced',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsBarAdvancedComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  constructor(private theme: NbThemeService,
              private charService: ChartService) {
  }

  ngAfterViewInit() {
    this.charService.getAdvancedBarDataSource()
      .subscribe(data => {
        console.log(data);
        this.options = {
          title: {
            text: 'Annual Requests Statistics',
          },
          tooltip: {
            trigger: 'axis',
          },
          xAxis: {
            data: data.map(function (item) {
              console.log(item[0])
              return item[0];
            }),
          },
          yAxis: {
            splitLine: {
              show: false,
            },
          },
          toolbox: {
            left: 'center',
            feature: {
              dataZoom: {
                yAxisIndex: 'none',
              },
              restore: {},
              saveAsImage: {},
            },
          },
          dataZoom: [{
            startValue: '2014-06-01',
          }, {
            type: 'inside',
          }],
          visualMap: {
            top: 10,
            right: 10,
            pieces: [{
              gt: 0,
              lte: 50,
              color: '#096',
            }, {
              gt: 50,
              lte: 100,
              color: '#ffde33',
            }, {
              gt: 100,
              lte: 150,
              color: '#ff9933',
            }, {
              gt: 150,
              lte: 200,
              color: '#cc0033',
            }, {
              gt: 200,
              lte: 300,
              color: '#660099',
            }, {
              gt: 300,
              color: '#7e0023',
            }],
            outOfRange: {
              color: '#999',
            },
          },
          series: {
            name: 'Annual Requests Statistics',
            type: 'line',
            data: data.map(function (item) {
              return item[1];
            }),
            markLine: {
              silent: true,
              data: [{
                yAxis: 50,
              }, {
                yAxis: 100,
              }, {
                yAxis: 150,
              }, {
                yAxis: 200,
              }, {
                yAxis: 300,
              }],
            },
          },
        }
      });
  }

  ngOnDestroy(): void {
  }
}

import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {ChartService} from '../../../@core/data/chart.service';

@Component({
  selector: 'ngx-echarts-multiple-xaxis',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsMultipleXaxisComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService,
              private chartService: ChartService) {
  }

  ngAfterViewInit() {
    this.chartService.getSafePointPara()
      .subscribe(base => {
        const data = base.data;
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

          const colors: any = config.variables;
          const echarts: any = config.variables.echarts;

          this.options = {
            backgroundColor: echarts.bg,
            color: [colors.success, colors.info],
            tooltip: {
              trigger: 'none',
              axisPointer: {
                type: 'cross',
              },
            },
            legend: {
              data: ['Safe Point Rate(events/s)', 'Safe Point Pause(ms)'],
              textStyle: {
                color: echarts.textColor,
              },
            },
            grid: {
              top: 70,
              bottom: 50,
            },
            xAxis: [
              {
                type: 'category',
                axisTick: {
                  alignWithLabel: true,
                },
                axisLine: {
                  onZero: false,
                  lineStyle: {
                    color: colors.info,
                  },
                },
                axisLabel: {
                  textStyle: {
                    color: echarts.textColor,
                  },
                },
                axisPointer: {
                  label: {
                    formatter: params => {
                      return (
                        'Precipitation  ' + params.value +
                        (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                      );
                    },
                  },
                },
                data: [
                  'parse-#1',
                  'parse-#2',
                  'parse-#3',
                  'parse-#4',
                  'parse-#5',
                  'parse-#6',
                  'parse-#7',
                  'parse-#8',
                  'parse-#9',
                  'parse-#10',
                ],
              },
              {
                type: 'category',
                axisTick: {
                  alignWithLabel: true,
                },
                axisLine: {
                  onZero: false,
                  lineStyle: {
                    color: colors.success,
                  },
                },
                axisLabel: {
                  textStyle: {
                    color: echarts.textColor,
                  },
                },
                axisPointer: {
                  label: {
                    formatter: params => {
                      return (
                        'Precipitation  ' + params.value +
                        (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                      );
                    },
                  },
                },
                data: [
                  'parse-#1',
                  'parse-#2',
                  'parse-#3',
                  'parse-#4',
                  'parse-#5',
                  'parse-#6',
                  'parse-#7',
                  'parse-#8',
                  'parse-#9',
                  'parse-#10',
                ],
              },
            ],
            yAxis: [
              {
                type: 'value',
                axisLine: {
                  lineStyle: {
                    color: echarts.axisLineColor,
                  },
                },
                splitLine: {
                  lineStyle: {
                    color: echarts.splitLineColor,
                  },
                },
                axisLabel: {
                  textStyle: {
                    color: echarts.textColor,
                  },
                },
              },
            ],
            series: [
              {
                name: 'Safe Point Rate(events/s)',
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                data: data.map(function (item) {
                  return item.value;
                }),
              },
              {
                name: 'Safe Point Pause(ms)',
                type: 'line',
                smooth: true,
                data: data.map(function (item) {
                  return item.name;
                }),
              },
            ],
          };
        });
      })
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

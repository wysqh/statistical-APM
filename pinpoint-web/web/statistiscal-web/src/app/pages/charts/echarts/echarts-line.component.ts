import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {ChartService} from '../../../@core/data/chart.service';

@Component({
  selector: 'ngx-echarts-line',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsLineComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService,
              private chartService: ChartService) {
  }

  ngAfterViewInit() {
    this.chartService.getSingleTaskDistribution()
      .subscribe(base => {
        const data = base.data;
        console.log(data.injectList);
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

          const colors: any = config.variables;
          const echarts: any = config.variables.echarts;

          this.options = {
            backgroundColor: echarts.bg,
            color: [colors.danger, colors.primary, colors.info],
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c}',
            },
            legend: {
              left: 'left',
              data: ['Inject Threads', 'Generate Threads', 'Fetch Threads', 'Parse Threads'],
              textStyle: {
                color: echarts.textColor,
              },
            },
            xAxis: [
              {
                type: 'category',
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                  '11', '12', '13', '14', '15', '16', '17'],
                axisTick: {
                  alignWithLabel: true,
                },
                axisLine: {
                  lineStyle: {
                    color: echarts.axisLineColor,
                  },
                },
                axisLabel: {
                  textStyle: {
                    color: echarts.textColor,
                  },
                },
              },
            ],
            yAxis: [
              {
                type: 'log',
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
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true,
            },
            series: [
              {
                name: 'Inject Threads',
                type: 'line',
                data: data.injectList,
              },
              {
                name: 'Generate Threads',
                type: 'line',
                data: data.generateList,
              },
              {
                name: 'Fetch Threads',
                type: 'line',
                data: data.fetchList,
              },
              {
                name: 'Parse Threads',
                type: 'line',
                data: data.parseList,
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

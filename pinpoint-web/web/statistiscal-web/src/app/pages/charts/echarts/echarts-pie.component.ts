import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {PieEchart} from '../../../@core/data/pie-echart';
import {ChartService} from '../../../@core/data/chart.service';
import {BaseResult} from '../../../@core/data/base-result';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsPieComponent implements OnInit, AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  // Echart 饼状图数据源
  dataSource: PieEchart;

  constructor(private theme: NbThemeService,
              private chartService: ChartService) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.chartService.getPieDataSource('', '')
        .subscribe(base => {
          if (base === null) {
            console.log('Transfer error');
            this.dataSource = null;
          } else {
            this.dataSource = base.data;
          }
          console.log(this.dataSource); // 测试数据返回是否正确

          const colors = config.variables;
          const echarts: any = config.variables.echarts;
          this.options = {
            backgroundColor: echarts.bg,
            color: [colors.warningLight, colors.infoLight, colors.dangerLight,
              colors.successLight, colors.primaryLight],
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            legend: {
              orient: this.dataSource.legend.orient,
              left: this.dataSource.legend.left,
              data: this.dataSource.legend.data,
              textStyle: {
                color: echarts.textColor,
              },
            },
            series: [
              {
                name: this.dataSource.series.name,
                type: this.dataSource.series.type,
                radius: this.dataSource.series.radius,
                center: this.dataSource.series.center,
                data: this.dataSource.series.data,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: echarts.itemHoverShadowColor,
                  },
                },
                label: {
                  normal: {
                    textStyle: {
                      color: echarts.textColor,
                    },
                  },
                },
                labelLine: {
                  normal: {
                    lineStyle: {
                      color: echarts.axisLineColor,
                    },
                  },
                },
              },
            ],
          };
        });

    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

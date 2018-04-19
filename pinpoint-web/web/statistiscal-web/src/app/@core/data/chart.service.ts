import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BaseResult} from './base-result';
import {PieEchart} from './pie-echart';
import {BarEchart} from './bar-echart';

@Injectable()
export class ChartService {

  constructor(private http: HttpClient) { }

  /*
      获取Echart 饼状图 测试数据源
   */
  getPieDataSource(start: string, end: string): Observable<BaseResult<PieEchart>> {
    const mockUrl: string = '/mock-data/echarts.json';
    return this.http.get<BaseResult<PieEchart>>(mockUrl);
  }

  /*
      获取Advanced 折线图数据 测试数据源
   */
  getAdvancedBarDataSource(): Observable<string[]> {
    const mockUrl: string = 'mock-data/bar-advanced.json';
    return this.http.get<string[]>(mockUrl);
  }

  /*
      获取Echart Bar图 测试数据源
   */
  getBarDataSource(): Observable<BaseResult<BarEchart>> {
    const mockUrl: string = '/mock-data/bar.json';
    return this.http.get<BaseResult<BarEchart>>(mockUrl);
  }
}

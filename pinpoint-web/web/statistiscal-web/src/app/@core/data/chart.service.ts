import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BaseResult} from './base-result';
import {PieEchart} from './pie-echart';

@Injectable()
export class ChartService {

  constructor(private http: HttpClient) { }

  private mockUrl: string = '/mock-data/echarts.json';

  /*
      获取Echart饼状图 测试数据源
   */
  getPieDataSource(start: string, end: string): Observable<BaseResult<PieEchart>> {
    return this.http.get<BaseResult<PieEchart>>(this.mockUrl);
  }
}

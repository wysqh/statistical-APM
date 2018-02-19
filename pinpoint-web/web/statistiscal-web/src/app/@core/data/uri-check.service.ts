import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BaseResult} from './base-result';
import {UriPerformance} from './uri-performance';

@Injectable()
export class UriCheckService {

  constructor(private http: HttpClient) { }

  private mockUrl: string = '/mock-data/uri-performance-check.json'; // 测试uri

  /*
      获取当日性能数据
   */
  getTodayUriPerformance(appName: string, uri: string, date: string): Observable<BaseResult<UriPerformance>> {
    return this.http.get<BaseResult<UriPerformance>>(this.mockUrl);
  }
}

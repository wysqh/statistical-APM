import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BaseResult} from './base-result';
import {UriPerformance} from './uri-performance';

@Injectable()
export class UriCheckService {

  constructor(private http: HttpClient) { }

  private mockUrl: string = '/mock-data/uri-performance-check.json'; // 测试uri
  private baseUrl: string = '/rest/uri/params?query=';  // 后端URL

  /*
      获取当日性能数据 (mock)
   */
  getTodayUriPerformance(appName: string, uri: string, date: string): Observable<BaseResult<UriPerformance>> {
    return this.http.get<BaseResult<UriPerformance>>(this.mockUrl);
  }

  /*
      获取当日性能数据
   */
  getTodayUriPerformanceFromServer(appName: string, uri: string, day: string): Observable<BaseResult<UriPerformance>> {
    const queryStr = encodeURI('{') +
      this.encodeQuery('appName') + ':' +
      (appName === null ? appName : this.encodeQuery(appName)) + ',' +
      this.encodeQuery('uri') + ':' +
      (uri === null ? uri : this.encodeQuery(uri)) + ',' +
      this.encodeQuery('day') + ':' +
      this.encodeQuery(day) +
      encodeURI('}');
    // 测试构造RESTful 接口是否正确
    console.log(this.baseUrl + queryStr);
    return this.http.get<BaseResult<UriPerformance>>(this.baseUrl + queryStr);
  }

  private encodeQuery(param: string): string {
    const slash: string = '\"';
    return encodeURI(slash) + encodeURI(param) + encodeURI(slash);
  }
}

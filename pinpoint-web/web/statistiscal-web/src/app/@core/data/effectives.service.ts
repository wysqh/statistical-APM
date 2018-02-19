import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, tap} from 'rxjs/operators';
import {Performance} from './performance';

@Injectable()
export class EffectivesService {

  private queryStr: string;
  private baseUrl: string;
  // 测试用mock数据地址
  private mockUrl: string = '/mock-data/effectives.json';
  private mockQueryUrl: string = '/mock-data/effectives-query.json';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  // public get(url: string, body: any, cb, options) {
  //   const ops = Object.assign({}, {params: body}, options);
  //   this.http.get(url, ops).subscribe(data => {
  //     this.format(data, cb, options.notload);
  //   });
  // }

  /*
      获取所有性能数据
   */
  getEffectives(): Observable<Performance[]> {
    return this.http.get<Performance[]>('/rest/effectives') // "/rest/effectives"
      .pipe(
        tap(effectives => this.log(`fetches effectives`)),
        catchError(this.handleError(`getEffecives`, [])),
      )
  }

  getEffectivesByConditions(start: string, end: string, app: string): Observable<Performance[]> {
    this.baseUrl = '/rest/effectives/params?query=';
    this.queryStr = encodeURI('{') +
      this.encodeQuery('start') + ':' +
      this.encodeQuery(start) + ',' +
      this.encodeQuery('end') + ':'   +
      this.encodeQuery(end) + ',' +
      this.encodeQuery('appName') + ':' +
      this.encodeQuery(app) +
      encodeURI('}');
    console.log(this.baseUrl + this.queryStr);
    return this.http.get<Performance[]>(this.baseUrl + this.queryStr)// this.baseUrl+ this.queryStr
      .pipe(
        tap(effectives => this.log(`fetchs effectives`)),
        catchError(this.handleError(`getEffecitves`, [])),
      )
  }

  private log(message: string) {
    this.messageService.add('Effectives Service: ' + message);
  }

  private handleError<T> (op = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${op} failed: ${error.message}`);
      return of(result as T);
    }
  }

  private encodeQuery(param: string): string {
    const slash: string = '\"';
    return encodeURI(slash) + encodeURI(param) + encodeURI(slash);
  }
}

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BaseResult} from './base-result';
import {Relation} from './relation';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NerServiceService {

  constructor(private http: HttpClient) { }

  /*
      实体与实体之间的关系抽取
   */
  getRelationFromEntity(e1: string, e2: string, s: string): Observable<BaseResult<Relation[]>> {
    let mockUrl: string = "/mock-data/relation.json"; //测试url
    return this.http.get<BaseResult<Relation[]>>(mockUrl);
  }

  /*
      获取外部Url
   */
  getUrlSeedsFromInjection(entity: string, theme: string, features: string): Observable<BaseResult<string[]>> {
    let requestUrl: string = "/api/crawl/injectUrls";
    let mockUrl: string = "/mock-data/urls-injection.json";
    return this.http.get<BaseResult<string[]>>(mockUrl);
  }

  /*
    获取实时消息更新
   */
  getNotifications(): Observable<BaseResult<string>> {
    let requestUrl: string = "/api/crawl/notice";
    let mockUrl: string = "/mock-data/notice.json";
    return this.http.get<BaseResult<string>>(mockUrl);
  }
}

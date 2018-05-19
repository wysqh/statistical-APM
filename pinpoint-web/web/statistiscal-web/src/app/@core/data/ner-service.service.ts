import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BaseResult} from './base-result';
import {Relation} from './relation';
import {HttpClient} from '@angular/common/http';
import {TaskHistory} from './task-history';

@Injectable()
export class NerServiceService {

  constructor(private http: HttpClient) { }

  /*
      实体与实体之间的关系抽取
   */
  getRelationFromEntity(e1: string, e2: string, s: string): Observable<BaseResult<Relation[]>> {
    const mockUrl: string = '/mock-data/relation.json'; // 测试url
    return this.http.get<BaseResult<Relation[]>>(mockUrl);
  }

  /*
      获取外部Url
   */
  getUrlSeedsFromInjection(entity: string, theme: string, features: string): Observable<BaseResult<string[]>> {
    const baseUrl: string = '/api/crawl/injectUrls';
    const mockUrl: string = '/mock-data/urls-injection.json';
    let requestUrl: string = '';
    if (features === '' || features === null) {
      requestUrl = baseUrl + '?entity=' + encodeURI(entity) + '&theme=' + encodeURI(theme);
    } else {
      requestUrl = baseUrl + '?entity=' + encodeURI(entity) + '&theme=' + encodeURI(theme) +
        '&features=' + encodeURI(features);
    }

    return this.http.get<BaseResult<string[]>>(requestUrl);
  }

  /*
    获取实时消息更新
   */
  getNotifications(): Observable<BaseResult<string>> {
    const requestUrl: string = '/api/crawl/notice';
    const mockUrl: string = '/mock-data/notice.json';
    return this.http.get<BaseResult<string>>(requestUrl);
  }

  /*
     获取相关性分析
   */
  getCorrelations(): Observable<BaseResult<string>> {
    const requestUrl: string = '/api/crawl/relations';
    return this.http.get<BaseResult<string>>(requestUrl);
  }

  /*
    获取提交任务列表
   */
  getHistoryTask(): Observable<BaseResult<TaskHistory[]>> {
    const mockUrl: string = '/mock-data/history.json';
    const requestUrl: string = '/api/crawl/getTaskHistories';
    return this.http.get<BaseResult<TaskHistory[]>>(requestUrl);
    }

    /*
      插入爬虫爬取记录
     */
    inserCrawlRecord(user: string, entity: string, theme: string, features: string, urls: string) {
      const baseUrl: string = '/api/crawl/insertTsql';
      let requestUrl: string = '';
      if (features === '' || features === null) {
        requestUrl = baseUrl + '?users=' + user + '&entity=' + encodeURI(entity) + '&theme=' + encodeURI(theme) +
        '&urls=' + urls;
      } else {
        requestUrl = baseUrl + '?users=' + user + 'entity=' + encodeURI(entity) + '&theme=' + encodeURI(theme) +
          '&features=' + encodeURI(features) + '&urls=' + urls;
      }
      console.log(requestUrl);
      return this.http.get<BaseResult<boolean>>(requestUrl);
    }
}

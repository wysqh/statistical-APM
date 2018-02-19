import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable} from 'rxjs/Observable';
import {BaseResult} from './base-result';
import {MaxResponse} from './max-rsp';
import {AvgResponse} from './avg-rsp';
import {MaxRequest} from './max-req';

@Injectable()
export class LastPerformanceService {

  /*
     测试用mockUrl地址集合
   */
  private mockMaxUrl: string = '/mock-data/last-max-rsp.json';
  private mockAvgUrl: string = '/mock-data/last-avg-rsp.json';
  private mockMaxReqUrl: string = '/mock-data/last-max-req.json';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }


  /*
     测试获取mockUrl数据: Max Response Time
   */
  getMockMaxRsp(): Observable<BaseResult<MaxResponse>> {
    return this.http.get<BaseResult<MaxResponse>>(this.mockMaxUrl);
  }

  /*
     测试获取mockUrl数据: Average Response Time
   */
  getMockAvgRsp(): Observable<BaseResult<AvgResponse>> {
    return this.http.get<BaseResult<AvgResponse>>(this.mockAvgUrl);
  }

  /*
     测试获取mockUrl数据: Max Request Time
   */
  getMockMaxReq(): Observable<BaseResult<MaxRequest>> {
    return this.http.get<BaseResult<MaxRequest>>(this.mockMaxReqUrl);
  }

  private log(message: string) {
    this.messageService.add('last-performance max response:' + message);
  }
}

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

  // 后端接口基地址
  private baseUrl: string = '/rest/statistics';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }


  /*
     测试获取mockUrl数据: Max Response Time
   */
  getMockMaxRsp(): Observable<BaseResult<MaxResponse[]>> {
    return this.http.get<BaseResult<MaxResponse[]>>(this.mockMaxUrl);
  }

  /*
     获取昨日最大响应时间耗时 Top10
   */
  getMaxRspFromServer(): Observable<BaseResult<MaxResponse[]>> {
    const queryTime: number = -1; // 当日为0，昨日为-1，明天为1，以此类推
    const uri: string = '/maxRsp/' + queryTime;
    console.log(this.baseUrl + uri);  // 测试接口地址是否正确
    return this.http.get<BaseResult<MaxResponse[]>>(this.baseUrl + uri);
  }

  /*
     测试获取mockUrl数据: Average Response Time
   */
  getMockAvgRsp(): Observable<BaseResult<AvgResponse[]>> {
    return this.http.get<BaseResult<AvgResponse[]>>(this.mockAvgUrl);
  }

  /*
    获取昨日平均响应时间耗时Top10
   */
  getAvgRspFromServer(): Observable<BaseResult<AvgResponse[]>> {
    const queryTime: number = -1;  // 当日为0，昨日为-1，明天为1，以此类推
    const uri: string = '/avgRsp/' + queryTime;
    console.log(this.baseUrl + uri); // 测试接口地址是否正确
    return this.http.get<BaseResult<AvgResponse[]>>(this.baseUrl + uri);
  }

  /*
     测试获取mockUrl数据: Max Request Time
   */
  getMockMaxReq(): Observable<BaseResult<MaxRequest[]>> {
    return this.http.get<BaseResult<MaxRequest[]>>(this.mockMaxReqUrl);
  }

  /*
     获取最日最大请求次数Top10
   */
  getMaxReqFromServer(): Observable<BaseResult<MaxRequest[]>> {
    const queryTime: number = -1; // 当日为0， 昨日为-1， 明天为1， 以此类推
    const uri: string = '/request/' + queryTime;
    console.log(this.baseUrl + uri);
    return this.http.get<BaseResult<MaxRequest[]>>(this.baseUrl + uri);
  }


  private log(message: string) {
    this.messageService.add('last-performance max response:' + message);
  }
}

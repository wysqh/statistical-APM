import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BaseResult} from './base-result';
import {PieEchart} from './pie-echart';
import {BarEchart} from './bar-echart';
import {VN} from './KN';
import {AllocMem} from './alloc-mem';
import {DisCpuOcc} from './dis-cpu-occ';
import {SingleTask} from './single-task';

@Injectable()
export class ChartService {

  constructor(private http: HttpClient) { }

  /*
      获取Echart 饼状图 测试数据源
   */
  getPieDataSource(start: string, end: string): Observable<BaseResult<PieEchart>> {
    const mockUrl: string = '/mock-data/echarts.json';
    const requestUrl: string = '/api/echart/pie';
    return this.http.get<BaseResult<PieEchart>>(requestUrl);
  }

  /*
      获取Advanced 折线图数据 测试数据源
   */
  getAdvancedBarDataSource(): Observable<BaseResult<VN<number, string>[]>> {
    const mockUrl: string = 'mock-data/bar-advanced.json';
    const requestUrl: string = '/api/echart/getGlobalData';
    return this.http.get<BaseResult<VN<number, string>[]>>(requestUrl);
  }

  /*
      获取Echart Bar图 测试数据源
   */
  getBarDataSource(): Observable<BaseResult<BarEchart>> {
    const mockUrl: string = '/mock-data/bar-ad.json';
    const requestUrl: string = '/api/echart/bar';
    return this.http.get<BaseResult<BarEchart>>(requestUrl);
  }

  /*
      获取FetchJob任务流CPU占用比
   */
  getCPUoccupation(): Observable<BaseResult<VN<number, number>[]>> {
    const mockUrl: string = '/mock-data/cpu.json';
    const requestUrl: string = '/api/echart/getCpuOc';
    return this.http.get<BaseResult<VN<number, number>[]>>(requestUrl);
  }

  /*
     获取内存占用比
   */
  getMemAlloc(): Observable<BaseResult<AllocMem>> {
    const mockUrl: string = '/mock-data/alloc.json';
    const requestUrl: string = '/api/echart/getMemAlloc';
    return this.http.get<BaseResult<AllocMem>>(requestUrl);
  }

  /*
     获取分布式任务CPU占用比
   */
  getDisCpuOcc(): Observable<BaseResult<DisCpuOcc>> {
    const mockUrl: string = '/mock-data/dis-cpu-occ.json';
    const requestUrl: string = '/api/echart/getDisCpuOcc';
    return this.http.get<BaseResult<DisCpuOcc>>(requestUrl);
  }

  /*
    获取单工作线程占用细节
   */
  getSingleTaskDistribution(): Observable<BaseResult<SingleTask>> {
    const mockUrl: string = '/mock-data/dis-task.json';
    const requestUrl: string = '/api/echart/getSingleJobDistribution';
    return this.http.get<BaseResult<SingleTask>>(requestUrl);
  }

  /*
    获取ParseJob JVM 安全点数据报告
   */
  getSafePointPara(): Observable<BaseResult<VN<string, string>[]>> {
    const mockUrl = '/mock-data/safe-point.json';
    const requestUrl = '/api/echart/getSafePointPara';
    return this.http.get<BaseResult<VN<string, string>[]>>(requestUrl);
  }
}

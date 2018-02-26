import {VN} from './KN';
import {SafeHtml} from '@angular/platform-browser';

export class Performance {
  uri: string;
  reqInPeriod: number;
  avgRspTime: number;
  maxRspTime: number;
  minRspTime: number;
  reqOver3s: number;
  slowTop10: VN<string, string>[];
  exceptionTop10: VN<string, string>[];
}

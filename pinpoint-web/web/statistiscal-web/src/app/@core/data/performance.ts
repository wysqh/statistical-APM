export class Performance {
  uri: string;
  reqInPeriod: number;
  avgRspTime: number;
  maxRspTime: number;
  minRspTime: number;
  reqOver3s: number;
  slowTop10: string;
  exceptionTop10: string;
}

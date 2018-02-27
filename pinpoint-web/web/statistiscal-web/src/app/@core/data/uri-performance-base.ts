import {VN} from './KN';

export class UriPerformanceBase {
 appName: string;
 uri: string;
 hour: string;
 agent: string;
 request: string;
 avgRsp: string;
 maxRsp: string;
 minRsp: string;
 slowCount: number;
 slows: string;
 exceptions: string;
 slowTop10: VN<string, string>[];
 exceptionTop10: VN<string, string>[];
};

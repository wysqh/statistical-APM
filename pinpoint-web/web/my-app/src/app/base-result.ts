export class BaseResult<T>{
  message: string;
  status: boolean;
  data: T[];
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-timepicker',
  templateUrl: './my-timepicker.component.html',
  styleUrls: ['./my-timepicker.component.css']
})
export class MyTimepickerComponent implements OnInit {
  mytime: Date = new Date();
  mintime: Date = new Date(); //设置最小时间
  maxtime: Date = new Date(); //设置最大时间

  hstep: number = 1; //设置时钟间隔
  mstep: number = 1; //设置分钟间隔

  ismerdian: boolean = false;
  isenabled: boolean = true;
  options: any = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30],
  };

  constructor() { }

  ngOnInit() {
    console.log(this.mytime.getTime()) //转化到mill second
    this.setTimeLimits();
  }

  setTimeLimits(): void {
    this.mintime.setHours(6);
    this.mintime.setMinutes(0);
    this.maxtime.setHours(22);
    this.maxtime.setMinutes(0);
  }

  toggleMode(): void {
    this.ismerdian = !this.ismerdian;
  }

  enableMode(): void {
    this.isenabled = !this.isenabled;
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BsLocaleService, listLocales} from "ngx-bootstrap";

@Component({
  selector: 'app-my-datepicker',
  templateUrl: './my-datepicker.component.html',
  styleUrls: ['./my-datepicker.component.css']
})
export class MyDatepickerComponent implements OnInit {
  locale = 'en';

  minDate: Date = new Date(2017, 1, 1);
  maxDate: Date = new Date(2018, 12, 31);

  bsValue: Date = new Date();

  constructor(private _localService: BsLocaleService) { }

  myForm = new FormGroup({
    myDate: new FormControl(new Date())
  });

  ngOnInit() {
   this.applyLocale()
  }

  applyLocale() {
    this._localService.use(this.locale);
  }

}

import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-charts',
  templateUrl: 'charts.component.html'
})
export class ChartsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private http: Http) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4
    };
    this.http.get('mock-data/data.json')
      .map(this.extractData)
      .subscribe(persons => {
        this.persons = persons;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
}

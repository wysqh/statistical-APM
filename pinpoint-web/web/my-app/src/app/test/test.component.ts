import { Component, OnInit } from '@angular/core';
import {ApplicationsService} from "../applications.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private applicationService: ApplicationsService) { }
  applications: string[];

  ngOnInit() {
    this.getApplications();
  }

  getApplications(): void {
    this.applicationService.getApplications()
      .subscribe(applications => this.applications = applications);
  }
}

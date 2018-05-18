import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'face-rec',
  templateUrl: './face-rec.component.html',
  styleUrls: ['./face-rec.component.scss'],
})
export class FaceRecComponent {
  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  columns = [
    { prop: 'name', summaryFunc: () => null },
    { name: 'Gender', summaryFunc: (cells) => this.summaryForGender(cells) },
    { name: 'Company', summaryFunc: () => null },
  ];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `mock-data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  private summaryForGender(cells: string[]) {
    const males = cells.filter(cell => cell === 'male').length;
    const females = cells.filter(cell => cell === 'female').length;

    return `males: ${males}, females: ${females}`;
  }
}

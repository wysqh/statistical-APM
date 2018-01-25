import { Hero } from "../hero";
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: [
    './hero-detail.component.css'
  ]
})

export class HeroDetailComponent implements OnInit{
  @Input() hero: Hero;
  constructor(private route: ActivatedRoute,  // holds information about the route to this instance of the HeroDetailComponent
              private heroService: HeroService,
              private location: Location) {     // an Angular service for interacting with the browser
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // a static image of the route information shortly after the component was created
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}

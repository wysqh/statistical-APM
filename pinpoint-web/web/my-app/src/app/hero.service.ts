import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { of } from 'rxjs/observable/of';
import { MessageService } from "./message.service";

// This is a typical "service-in-service" scenario:
// you inject the MessageService into the HeroService
// which is injected into the HeroesComponent.
@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeros(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {catchError, tap} from "rxjs/operators";
import {Performance} from "./performance";

@Injectable()
export class EffectivesService {

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  // public get(url: string, body: any, cb, options) {
  //   const ops = Object.assign({}, {params: body}, options);
  //   this.http.get(url, ops).subscribe(data => {
  //     this.format(data, cb, options.notload);
  //   });
  // }

  getEffectives(): Observable<Performance[]> {
    return this.http.get<Performance[]>("/rest/effectives")
      .pipe(
        tap(effectives => this.log(`fetches effectivws`)),
        catchError(this.handleError(`getEffecives`, []))
      )
  }

  private log(message: string) {
    this.messageService.add("Effectives Service: " + message);
  }

  private handleError<T> (op = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${op} failed: ${error.message}`);
      return of(result as T);
    }
  }
}

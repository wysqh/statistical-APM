import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {catchError, tap} from "rxjs/operators";
import {MessageService} from "./message.service";
import { of } from 'rxjs/observable/of';

@Injectable()
export class ApplicationsService {

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  private mockUrl: string = "/mock-data/applications.json"; //测试uri

  /*
      获取所有模块名称
   */
  getApplications(): Observable<string[]> {
    let requestUrl: string = "/rest/applications";  //后端url

    return this.http.get<string[]>(requestUrl)
      .pipe(
        tap(applications=>this.log(`fetches applications`)),
        catchError(this.handleError(`getApplications`, []))
      )
  }

  /*
       获取相似模块名称
   */
  getApplicationsBySimilar(term: string): Observable<string[]> {
    let requestUrl = "/rest/applications/name";   //后端url

    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<string[]>(this.mockUrl)
      .pipe(
        tap(_ => this.log(`getApplicationsBySimilar`)),
        catchError(this.handleError<string[]>('searchTerm', [])),
        tap(_ => this.messageService.clear())
      )
  }

  private log(message: string) {
    this.messageService.add("ApplicationService: " + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

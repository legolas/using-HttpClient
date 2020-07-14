import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Users} from "./users";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get(`https://reqres.in/api/users`)
      .pipe(
        map((data: Users[]) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong');
        })
      )
  }
}

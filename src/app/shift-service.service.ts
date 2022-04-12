import { Injectable } from '@angular/core';
import {Smena} from "./model/Smena";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShiftServiceService {

  constructor(
    private http: HttpClient
  ) {
    this.getAllShifts();
  }

  delete(shift: Smena): Observable<any> {

    return this.http.delete(`app/allShifts/${shift}.json`);

  }

  edit(shift: Smena): Observable<any> {

    return this.http.post("app/allShifts", shift);

  }

  create(shift: Smena): Observable<any> {

    return this.http.post("app/allShifts", shift);

  }

  public getAllShifts(): Observable<any> {

    return this.http.get("app/allShifts")

  }


}

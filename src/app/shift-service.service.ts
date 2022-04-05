import { Injectable } from '@angular/core';
import {StaticData} from "./data/StaticData";
import {Smena} from "./model/Smena";
import {BehaviorSubject} from "rxjs";

@Injectable({
  //возможно надо будет убрать строчку
  providedIn: 'root'
})
export class ShiftServiceService {
  public smenaSubject = new BehaviorSubject<Smena[]>(StaticData.allShifts);

  constructor() {
    this.fillTasks();
  }

  fillTasks() {
    this.smenaSubject.next(StaticData.allShifts);
  }
}

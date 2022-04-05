import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShiftServiceService} from "../shift-service.service";
import {MatDialog} from "@angular/material/dialog";
import {AddDialogComponent} from "../dialog/add-dialog/add-dialog.component";
import {Smena} from "../model/Smena";
import {BehaviorSubject, Subject} from "rxjs";
import {StaticData} from "../data/StaticData";
import {takeUntil} from "rxjs/operators";
import {EditdialogComponent} from "../dialog/editdialog/editdialog.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  public onDestroySubject$: Subject<boolean> = new Subject<boolean>();
  public allShift: Smena[] = [];

  constructor(
    private shiftServiceService: ShiftServiceService,
    private dialog: MatDialog,
    private ShiftServiceService: ShiftServiceService
  ) { }

  ngOnInit(): void {
    this.ShiftServiceService.smenaSubject.pipe(
      takeUntil(this.onDestroySubject$)
    ).subscribe((allShift: Smena[]) => {
      console.log(':', allShift);
      this.allShift = allShift;
    });
  }

  ngOnDestroy(): void {
    this.onDestroySubject$.next(true);
    this.onDestroySubject$.complete();
  }

  public editShift(shift: Smena, index: number): void {
    const dialogRef = this.dialog.open(EditdialogComponent, {data: [this.allShift, 'Редактирование смены', index], autoFocus: false});
    dialogRef.afterClosed().subscribe(result => {
      //обработка результатов
      console.log('result', result);
    })
  }

  public addDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {data: ['Добавление смены'], autoFocus: false});

  }



}

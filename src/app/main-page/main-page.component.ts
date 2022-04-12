import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShiftServiceService} from "../shift-service.service";
import {MatDialog} from "@angular/material/dialog";
import {AddDialogComponent} from "../dialog/add-dialog/add-dialog.component";
import {Smena} from "../model/Smena";
import {Subject} from "rxjs";
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
    public shiftServiceService: ShiftServiceService,
    private dialog: MatDialog,
    private ShiftServiceService: ShiftServiceService
  ) {
  }

  ngOnInit(): void {

    this.ShiftServiceService.getAllShifts().pipe(
      takeUntil(this.onDestroySubject$)
    ).subscribe((allShift: Smena[]) => {
      this.allShift = allShift;
    });
  }

  ngOnDestroy(): void {
    this.onDestroySubject$.next(true);
    this.onDestroySubject$.complete();
  }

  public removeAccount(shift: Smena, index: number) {
    this.shiftServiceService.delete(shift);
    this.allShift.splice(index, 1);
  }

  public addDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {data: ['Добавление смены'], autoFocus: false});
    dialogRef.afterClosed().subscribe(result => {
      this.ShiftServiceService.getAllShifts().pipe(
        takeUntil(this.onDestroySubject$)
      ).subscribe((allShift: Smena[]) => {
        this.allShift = allShift;
      });
    })

  }

  public editDialog(shift: Smena, index: number): void {
    this.allShift.splice(index, 1);
    this.shiftServiceService.delete(shift);
    const dialogRef = this.dialog.open(EditdialogComponent, {data: [shift, index], autoFocus: false});
    dialogRef.afterClosed().subscribe(result => {
      this.ShiftServiceService.getAllShifts().pipe(
        takeUntil(this.onDestroySubject$)
      ).subscribe((allShift: Smena[]) => {
        this.allShift = allShift;
      });
    })

  }


}

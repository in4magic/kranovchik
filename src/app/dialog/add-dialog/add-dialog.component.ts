import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Smena} from "../../model/Smena";
import {ShiftServiceService} from "../../shift-service.service";
import {Loads} from "../../model/Loads";
import {AlertService} from "../../shared/services/alert.service";

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']

})
export class AddDialogComponent implements OnInit {
  public registrationForm: FormGroup;
  public tapSelect: FormControl;
  public firstName: FormControl;
  public startDate: FormControl;
  public endDate: FormControl;
  public truckNameLoaded: FormControl;
  public truckNameUploaded: FormControl;
  public tmpDate: Date;
  public loads: Loads[];
  public loads2: Loads[];
  public allTrucks: string[];
  public totalUpload: number = 0;
  public totalLoad: number = 0;
  public totalUpload2: number = 0;
  public totalLoad2: number = 0;

  constructor(
    private dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: [],
    private shiftServiceService: ShiftServiceService,
    public alertService: AlertService
  ) {
    this.allTrucks = [
      'Грузовик 1',
      'Грузовик 2',
      'Грузовик 3',
      'Грузовик 4',
      'Грузовик 5',
    ];
    this.loads = [
      {truckName: 'truckNotSelect', loaded: 0, uploaded: 0},
    ];
    this.loads2 = [
      {truckName: 'truckNotSelect', loaded: 0, uploaded: 0},
    ];
    this.tmpDate = new Date();
    this.tapSelect = new FormControl("");
    this.startDate = new FormControl("", Validators.required);
    this.endDate = new FormControl("", Validators.required);
    this.firstName = new FormControl("", Validators.required);
    this.truckNameLoaded = new FormControl("");
    this.truckNameUploaded = new FormControl("");
    this.registrationForm = new FormGroup({
      tapSelect: this.tapSelect,
      firstName: this.firstName,
      startDate: this.startDate,
      endDate: this.endDate,
      truckNameLoaded: this.truckNameLoaded,
      truckNameUploaded: this.truckNameUploaded
    });
  }

  ngOnInit(): void {

  }

  closeDialog() {
    this.dialogRef.close('exit!');
  }

  truckSelect(i: number) {
    if (this.loads[i]) {
      this.loads[i].truckName = 'truckIsSelected';
    }
    let newLoad: Loads = {
      truckName: 'truckNotSelect',
      loaded: 0,
      uploaded: 0
    };
    //нужно добавить логику
    //если i+1 массива Load не cуществует то добавляем его с пустыми значениями
    if (this.loads.length === i + 1) {
      this.loads.push(newLoad);
    }
  }

  truckSelect2(i: number) {
    if (this.loads2[i]) {
      this.loads2[i].truckName = 'truckIsSelected';
    }
    let newLoad: Loads = {
      truckName: 'truckNotSelect',
      loaded: 0,
      uploaded: 0
    };
    //нужно добавить логику
    //если i+1 массива Load не cуществует то добавляем его с пустыми значениями
    if (this.loads2.length === i + 1) {
      this.loads2.push(newLoad);
    }
  }

  getValue(event: Event): any {

    return (event.target as HTMLInputElement).value;
  }

  public summ(): void {

    /*for (let i=0; i < this.trucksNames.length; i++) {

    }*/
  }

  public calculate(): void {
    let sumLoad: number = 0;
    let sumUpload: number = 0;
    for (let i = 0; i < this.loads.length; i++) {
      this.loads[i].loaded = Number(this.loads[i].loaded);
      this.loads[i].uploaded = Number(this.loads[i].uploaded);
      sumLoad += this.loads[i].loaded;
      sumUpload += this.loads[i].uploaded;
    }
    this.totalUpload = sumUpload;
    this.totalLoad = sumLoad;
  }

  public calculate2(): void {
    let sumLoad: number = 0;
    let sumUpload: number = 0;
    for (let i = 0; i < this.loads2.length; i++) {
      this.loads2[i].loaded = Number(this.loads2[i].loaded);
      this.loads2[i].uploaded = Number(this.loads2[i].uploaded);
      sumLoad += this.loads2[i].loaded;
      sumUpload += this.loads2[i].uploaded;
    }
    this.totalUpload2 = sumUpload;
    this.totalLoad2 = sumLoad;
  }

  public clearEndDate() {
    this.endDate.setValue(null);
  }

  public clearStartDate() {
    this.startDate.setValue(null);
  }


  public onSubmit(): void {
    if (this.registrationForm.invalid) {
      return
    }

    const shift: Smena = {
      FIO: this.firstName.value,
      tapTypeSingle: this.tapSelect.value,
      startDate: this.startDate.value,
      endDate: this.endDate.value,
      totalLoad: this.totalLoad + this.totalUpload + this.totalUpload + this.totalUpload2

    }

    this.shiftServiceService.create(shift)
      .subscribe(() => {
        this.registrationForm.reset();
        this.alertService.success('Смена была добавлена');

      })
  }

  public deleteRow(i: number): void {
    this.loads.splice(i, 1);
  }

  public deleteRow2(i: number): void {
    this.loads2.splice(i, 1);
  }
}

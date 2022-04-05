import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from "@angular/material/dialog";
import {Smena} from "../../model/Smena";

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  public registrationForm: FormGroup;
  public tapSelect: FormControl;
  public firstName: FormControl;
  public lastName: FormControl;
  public email: FormControl;
  public password: FormControl;
  public startDate: FormControl;
  public tmpDate: Date;

  constructor(
    private dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data:[Smena, string, number]
  ) {
    //this.createFormControls();
    this.tmpDate = new Date();
    this.tapSelect = new FormControl("");
    this.startDate = new FormControl("");
    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("", Validators.required);

    this.email = new FormControl("", [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl("", [
      Validators.minLength(8),
      Validators.required
    ]);
    //this.createForm();
    this.registrationForm = new FormGroup({
      tapSelect: this.tapSelect,
      firstName: this.firstName,
      startDate: this.startDate,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    });
  }

  ngOnInit(): void {

  }
  public clearDate() {
    console.log('clear');
  }

  public createFormControls() {
    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("", Validators.required);

    this.email = new FormControl("", [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl("", [
      Validators.minLength(8),
      Validators.required
    ]);
  }

  public createForm() {
    this.registrationForm = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email: this.email,
      password: this.password
    });
  }
  public onSubmit(): void {
    console.log('on submit', this.registrationForm.value);
  }

}

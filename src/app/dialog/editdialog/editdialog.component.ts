import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Smena} from "../../model/Smena";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.scss']
})
export class EditdialogComponent implements OnInit {
  public dialogTitle: string = '';
  public shift: any;
  public indexFromMainPage: number = 0;
  public form: any;
  //registrationForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditdialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data:[Smena, string, number]
  ) { }


  ngOnInit(): void {
    this.shift = this.data[0];
    this.dialogTitle = this.data[1];
    this.indexFromMainPage = this.data[2];
   // this.form = document.forms.editform;

    console.log('shift', this.shift);
  }


}

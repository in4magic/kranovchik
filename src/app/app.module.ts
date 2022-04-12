import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

import {ShiftServiceService} from "./shift-service.service";
import { EditdialogComponent } from './dialog/editdialog/editdialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { AddDialogComponent } from './dialog/add-dialog/add-dialog.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryServerModule} from "./data/InMemoryServer.module";
import {StaticData} from "./data/StaticData";
import { HttpClientModule } from "@angular/common/http"
import {AlertService} from "./shared/services/alert.service";
import {AlertComponent} from "./shared/components/alert/alert.component";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    EditdialogComponent,
    AddDialogComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(StaticData),
    InMemoryServerModule
  ],
  providers: [
    ShiftServiceService,
    AlertService
  ],
  entryComponents: [
    EditdialogComponent,
    AddDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

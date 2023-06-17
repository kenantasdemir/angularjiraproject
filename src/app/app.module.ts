import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { BoardsComponent } from './boards/boards.component';
import { BoardDialogComponent } from './boards/board-dialog/board-dialog.component'
import {MatDialogModule} from "@angular/material/dialog"
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon";
import { ViewboarddetailComponent } from './viewboarddetail/viewboarddetail.component';
import { ViewboarddialogComponent } from './viewboarddetail/viewboarddialog/viewboarddialog.component'
import {FormsModule} from "@angular/forms"
import {MatSnackBarModule} from "@angular/material/snack-bar"
import {MatCardModule} from "@angular/material/card"
import {MatCheckboxModule} from "@angular/material/checkbox"
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardsComponent,
    BoardDialogComponent,
    ViewboarddetailComponent,
    ViewboarddialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

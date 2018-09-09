import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddtraineeComponent } from './addtrainee/addtrainee.component';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddtraineeComponent
  ],
  imports: [
    BrowserModule,
    DlDateTimePickerDateModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      { path : 'addTrainee', component : AddtraineeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

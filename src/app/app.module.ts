import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddtraineeComponent } from './addtrainee/addtrainee.component';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { TraineeDetailsComponent } from './trainee-details/trainee-details.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddtraineeComponent,
    HomeComponent,
    TraineeDetailsComponent,
    ViewFeedbackComponent,
    AddFeedbackComponent
  ],
  imports: [
    BrowserModule,
    DlDateTimePickerDateModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path : '' , component : HomeComponent },
      { path : 'addTrainee', component : AddtraineeComponent},
      { path : 'traineeDetails' , component : TraineeDetailsComponent},
      { path : 'addFeedback' , component : AddFeedbackComponent},
      { path : 'viewFeedbacks' , component : ViewFeedbackComponent}
    ]),
    HttpModule,
    GridModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

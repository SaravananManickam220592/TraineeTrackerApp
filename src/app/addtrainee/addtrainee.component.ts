import { Component } from '@angular/core';
import { TraineeService } from '../trainee.service';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addtrainee',
  templateUrl: './addtrainee.component.html',
  styleUrls: ['./addtrainee.component.css']
})
export class AddtraineeComponent{

  addTraineeStatus:boolean=false;

  constructor(private traineeService:TraineeService) { }

  saveTrainee(traineeDetailsForm: NgForm){
      var me=this;
      var traineeDetails=traineeDetailsForm.value;
      let joiningDateVal=traineeDetails.joiningDate;
      traineeDetails['joiningDate']=joiningDateVal.year+"-"+joiningDateVal.month+"-"+joiningDateVal.day;
      me.traineeService.addTraineeDetails(traineeDetails)
      .then(res=>{
        this.extractData(res);
        me.addTraineeStatus=true;
        traineeDetailsForm.resetForm();
        setTimeout(()=>{
        me.addTraineeStatus=false;
        },3000);
      })
      .catch(this.handleErrorPromise);
  }
  
  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }	

  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

}

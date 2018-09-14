import { FeedbackService } from './../feedback.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {
  rating=0;
  addFeedbackStatus:boolean=false;

  constructor(private feedbackService:FeedbackService) { }

  ngOnInit() {
  }

  addFeedback(feedbackForm:NgForm){
    var me=this;
    var feedbackDetails=feedbackForm.value;
    me.feedbackService.addFeedback(feedbackDetails)
    .then(res=>{
      this.extractData(res);
      me.addFeedbackStatus=true;
      feedbackForm.resetForm();
      setTimeout(()=>{
      me.addFeedbackStatus=false;
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

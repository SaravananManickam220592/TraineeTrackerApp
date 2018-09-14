import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  
  url = "http://localhost:3000/feedbacks";

  constructor(private http:Http){
  }

  addFeedback(feedback){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url,feedback, options).toPromise();
}

}

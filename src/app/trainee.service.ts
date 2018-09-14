import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  url = "http://localhost:3000/trainees";

  constructor(private http:Http){

  }

  addTraineeDetails(trainee){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url,trainee, options).toPromise();
  }

  getTraineeDetails(){
    return this.http.get(this.url);
  }

}

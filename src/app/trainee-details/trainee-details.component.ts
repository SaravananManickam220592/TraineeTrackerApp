import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TraineeService } from '../trainee.service';
import { process, State } from '@progress/kendo-data-query';
import {
  GridComponent,
  GridDataResult,
  DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-trainee-details',
  templateUrl: './trainee-details.component.html',
  styleUrls: ['./trainee-details.component.css']
})
export class TraineeDetailsComponent implements OnInit {

  public traineeGridData: any[] = [];
  public state: State = {
    skip: 0,
    take: 10,
  };
  loading:boolean=false;


  constructor(private traineeService:TraineeService) { }

  ngOnInit() {
    this.loading=true;
      this.traineeService.getTraineeDetails().subscribe((response) => {
        this.traineeGridData = (JSON.parse(response.text()))['trainees'];
        this.loading=false;
    });
    // gridData=process(this.traineeGridData, this.state);
  }


}

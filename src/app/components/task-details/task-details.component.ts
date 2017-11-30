import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Title } from '@angular/platform-browser/src/browser/title';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }
  tasks = [];
  allDetails = {};
  index:any;
  ngOnInit() {
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.index = params['index'];
    });
    
    //check if localStorage of "Tasks" is full or empty
    if(localStorage.getItem('Tasks') === null){
      this.tasks = [];
    }
    else{
      this.tasks = JSON.parse(localStorage.getItem('Tasks')); //Parse string back to objects
      this.updateTask(this.index);
    }
  }

  updateTask(index){
    this.allDetails = this.tasks[index];
    console.log(this.allDetails);
  }

  deleteTask(){
    // this.allDetails.splice(this.index,1);
  }

}
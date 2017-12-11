import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private dataService: DataService) { }
  status:boolean = false;
  tasks=[];
  values={};
  keys=[];
  today:Date;
  ngOnInit() {
    this.dataService.getTasks().subscribe((data)=>{
      this.tasks = data;
    });
  }

  addTaskStatus(){
    this.status = !this.status;
  }
  addTask(event) {
    if(event.keyCode == 13) {
      //get current time
      this.today = new Date();
      var date = (this.today.getMonth()+1)+'/'+this.today.getDate()+'/'+this.today.getFullYear();
      var time = this.today.getHours() + ":" + this.today.getMinutes();
      var ampm = this.today.getHours()>12 ? 'PM':'AM';
      var dateTime = date+' '+time+ampm;

      //push new values into tasks
      this.tasks.push(this.values);
      this.tasks[this.tasks.length-1].Date_Created = dateTime;
      this.tasks[this.tasks.length-1].Data_Modified = dateTime;
      console.log(this.tasks);

      //hide create row
      this.status = !this.status;
      this.values={};

      localStorage.setItem("Tasks",JSON.stringify(this.tasks));

    }
  }

  //task details
    // tasks = [];
  // allDetails = {};
  // index:any;
  // // ngOnInit() {
  // //   this.activatedRoute.params.subscribe((params:Params)=>{
  // //     this.index = params['index'];
  // //   });
    
  // //   //check if localStorage of "Tasks" is full or empty
  // //   if(localStorage.getItem('Tasks') === null){
  // //     this.tasks = [];
  // //   }
  // //   else{
  // //     this.tasks = JSON.parse(localStorage.getItem('Tasks')); //Parse string back to objects
  // //     this.updateTask(this.index);
  // //   }
  // // }

  // // updateTask(index){
  // //   this.allDetails = this.tasks[index];
  // //   console.log(this.allDetails);
  // // }

  // // deleteTask(){
  // //   this.tasks.splice(this.index,1);
  // // }
}

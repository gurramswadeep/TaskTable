import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private dataService: DataService) { }
  status:boolean = false;
  tasks:any=[];
  values={};
  keys=[];
  today:Date;
  ngOnInit() {
    this.tasks = this.dataService.getTasks();
    this.keys = Object.keys(this.tasks[0]);
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
      console.log(this.tasks);

      //hide create row
      this.status = !this.status;
      this.values={};

      localStorage.setItem("Tasks",JSON.stringify(this.tasks));

    }
  }
}

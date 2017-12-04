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
  parents_childs_titles = [];
  today:Date;
  ngOnInit() {
    this.dataService.getTasks().subscribe((data)=>{
      this.tasks = data;
      this.updateParent();
    });
  }

  updateParent(){
    this.parents_childs_titles = [];
    for(let i=0;i<this.tasks.length;i++){
      this.parents_childs_titles.push(this.tasks[i].Title);
      
      if(this.tasks[i]["child"]){
        for(let j=0; j<this.tasks[i].child.length;j++){
          this.parents_childs_titles.push(this.tasks[i].child[j].Title);
        }
      }   
    }
  
  }
  addTaskStatus(){
    this.status = !this.status;
  }
  
  addTask(event) {
      // set time and date
      this.today = new Date();
      var date = (this.today.getMonth()+1)+'/'+this.today.getDate()+'/'+this.today.getFullYear();
      var time = this.today.getHours() + ":" + this.today.getMinutes();
      var ampm = this.today.getHours()>12 ? 'PM':'AM';
      var dateTime = date+' '+time+ampm;
      this.values["Date_Created"] = dateTime;
      this.values["Date_Modified"]= dateTime;

      //if there is not parent
      if(this.values["Parent"] == null){
        //push new values into tasks
        this.tasks.push(this.values);
      }
      else{   
        for(let i=0; i<this.tasks.length;i++){
          //check if parent selected is equal to any task (for Child)
          if(this.tasks[i].Title == this.values["Parent"]){
            //Check if there is no child array in parent task
            if(!this.tasks[i].child){
              //creating a new child
            this.tasks[i].child = [];
           }
           this.tasks[i].child.push(this.values);
          }
          else{   //if parent selected is not equal to any task
            for(let j=0; j<this.tasks[i].child.length; j++){
              //if child task tittle is equal to the parent selected (for grandchild)
              if(this.tasks[i].child[j].Title == this.values["Parent"]){
                //check if grandchild does not exist
                if(!this.tasks[i].child[j].grandchild){
                  this.tasks[i].child[j].grandchild = [];
                }
                this.tasks[i].child[j].grandchild.push(this.values);
                break;
              }
             
            }
          }
        } 
      }
      
      if(this.values["child"] == null){
        // this.values = {};
      }
      this.updateParent();

      //hide create button
      this.status = !this.status;
      this.values={};
      
      // LocalStorage
      localStorage.setItem("Tasks",JSON.stringify(this.tasks));
  }

  // Delete selected tast
  delete(){
    
  }

  //Update Parent task
  createStatus:boolean = true;
  update(i){
    this.createStatus = !this.createStatus;
    // update date modified
    this.today = new Date();
    var date = (this.today.getMonth()+1)+'/'+this.today.getDate()+'/'+this.today.getFullYear();
    var time = this.today.getHours() + ":" + this.today.getMinutes();
    var ampm = this.today.getHours()>12 ? 'PM':'AM';
    var dateTime = date+' '+time+ampm;
    this.values["Date_Modified"]= dateTime;
    this.values = this.tasks[i];
  }

  //Update child task
  updateChild(i,childIndex){
    this.createStatus = !this.createStatus;
    // update date modified
    this.today = new Date();
    var date = (this.today.getMonth()+1)+'/'+this.today.getDate()+'/'+this.today.getFullYear();
    var time = this.today.getHours() + ":" + this.today.getMinutes();
    var ampm = this.today.getHours()>12 ? 'PM':'AM';
    var dateTime = date+' '+time+ampm;
    this.values["Date_Modified"]= dateTime;
    this.values = this.tasks[i].child[childIndex];
  }

  //update grandchild task
  updateGChild(i,childIndex,gChildIndex){
    this.createStatus = !this.createStatus;
     // update date modified
     this.today = new Date();
     var date = (this.today.getMonth()+1)+'/'+this.today.getDate()+'/'+this.today.getFullYear();
     var time = this.today.getHours() + ":" + this.today.getMinutes();
     var ampm = this.today.getHours()>12 ? 'PM':'AM';
     var dateTime = date+' '+time+ampm;
     this.values["Date_Modified"]= dateTime;
     this.values = this.tasks[i].child[childIndex].grandchild[gChildIndex];
  }

  //cancel and empty fields
  cancel(){
    this.values = {};
    this.createStatus = !this.createStatus;
  }

  // deleteTask(){
  //   this.tasks.splice(this.index,1);
  // }
}
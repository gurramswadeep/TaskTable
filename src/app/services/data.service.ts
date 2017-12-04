import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  tasks = [
    {
      "Title": "Task 1",
      "Priority": "Major",
      "Status": "In Progress",
      "Due_Date": "2017-6-28",
      "Date_Created": "6/28/2017 2:33PM",
      "Date_Modified": "6/28/2017 1:22PM",
      "Parent":"",
  
      "child": [{
        "Title": "Task 1.1",
        "Priority": "Normal",
        "Status": "In Progress",
        "Due_Date": "6/28/2017",
        "Date_Created": "6/28/2017 2:33PM",
        "Date_Modified": "6/28/2017 1:22PM",
        "Parent":"Task 1",
  
        "grandchild": [{
            "Title": "Task 1.1.1",
            "Priority": "Critical",
            "Status": "In Progress",
            "Due_Date": "6/28/2017",
            "Date_Created": "6/28/2017 2:33PM",
            "Date_Modified": "6/28/2017 1:22PM",
            "Parent":"Task 1.1"
          }]
        },
  
        {			
        "Title": "Task 1.2",
        "Priority": "Major",
        "Status": "In Progress",
        "Due_Date": "6/28/2017",
        "Date_Created": "6/28/2017 2:33PM",
        "Date_Modified": "6/28/2017 1:22PM",
        "Parent":"Task 1",
  
        "grandchild": [{
          "Title": "Task 1.2.1",
          "Priority": "Major",
          "Status": "In Progress",
          "Due_Date": "6/28/2017",
          "Date_Created": "6/28/2017 2:33PM",
          "Date_Modified": "6/28/2017 1:22PM",
          "Parent":"Task 1.2"
        }]
      }
        ]
  
    },
  
    {
      "Title": "Task 2",
      "Priority": "Normal",
      "Status": "Done",
      "Due_Date": "6/28/2017",
      "Date_Created": "6/28/2017 2:33PM",
      "Date_Modified": "6/28/2017 1:22PM",
      "Parent":"",
      "child": []
    },
  
    {
      "Title": "Task 3",
      "Priority": "Critical",
      "Status": "ToDo",
      "Due_Date": "6/28/2017",
      "Date_Created": "6/28/2017 2:33PM",
      "Date_Modified": "6/28/2017 1:24PM",
      "Parent":"",
      "child": []
    }
    
    
  ];

  observableTasks = Observable.create( observer => {
      observer.next(this.tasks);
      observer.complete();
  });

  constructor() { 
    
  }
  getTasks(){
    return this.observableTasks; 
  }
}

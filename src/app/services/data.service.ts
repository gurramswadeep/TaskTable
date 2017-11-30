import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  tasks = [
    {
      Title:"Task 1",
      Priority:"Major",
      Status:"ToDo",
      Due_Date:"6/2/2016",
      Date_Created:"5/1/2016 2:33PM",
      Data_Modified:"5/2/2016 1:22PM"
    },
    {
      Title:"Task 2",
      Priority:"Major",
      Status:"In Progress",
      Due_Date:"5/2/2016",
      Date_Created:"5/1/2016 2:33PM",
      Data_Modified:"5/2/2016 1:22PM"
    }
  ];
  constructor() { 
    
  }
  getTasks(){
    return this.tasks; //unnava?ahye ahso ikkada return chesna but table list omponent lo ela teeskovali without subscribe?
  }
}

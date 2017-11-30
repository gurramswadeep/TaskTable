import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  tasks = [];

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

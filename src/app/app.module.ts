import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,ActivatedRoute, Params } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailsComponent } from './Components/task-details/task-details.component';
import { DataService } from './services/data.service';
import { HomeComponent } from './Components/home/home.component';

const appRoutes=[
  {path:'', component:TaskListComponent},
    {path:'taskDetails/:index',component:TaskDetailsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

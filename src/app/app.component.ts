import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

courses = COURSES;
startDate = new Date(2023, 0, 1);

title: string = COURSES[1].description;
price: number = 101.79;
rate: number = 1.2;
course = COURSES[1];  


onCourseSelected(course: Course) {
   console.log("App component - click event bubbled ...", course)
}



}

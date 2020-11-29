import { Component, Input } from "@angular/core";
import { Student } from 'src/app/module/student';

@Component({
    selector:"detstud",
    templateUrl:"./detstud.component.html",
    styleUrls:["./detstud.component.css"]
})

export class StudentDetails{
    @Input() flag!:boolean;
    @Input() stud!:Student;
}
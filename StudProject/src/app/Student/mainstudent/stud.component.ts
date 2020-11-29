import { Component } from "@angular/core";
import { Student } from 'src/app/module/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
    selector:"stud",
    templateUrl:"./stud.component.html",
    styleUrls:["./stud.component.css"]
})

export class StudentComponent{
    stud!:Student[];
    sob!:Student;
    flag:boolean=false;
    visit:boolean=false;
    constructor(private stdserv:StudentService){

    }

    ngOnInit():void {
        console.log("In OnInit");
        this.stud=this.stdserv.getAllStudents();
    }

    showform(){
        this.sob=new Student();
        this.flag=true;
        this.visit=false;
    }

    showStudentDetails(s:Student){
        this.flag=false;
        this.visit=true;
        this.sob=s;
    }

    updateStud(s:Student){
        this.flag=true;
        this.visit=false;
        this.sob=s;

    }

    deleteStud(s:Student){
        this.flag=false;
        this.visit=false;
        this.stdserv.deleteStudent(s);
    }
}
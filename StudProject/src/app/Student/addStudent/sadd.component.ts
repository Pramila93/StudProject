import { Component ,Output,EventEmitter, Input, SimpleChanges} from "@angular/core";
import { Student } from 'src/app/module/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
    selector:"sadd",
    templateUrl:"./sadd.component.html",
    styleUrls:["./sadd.component.css"]
})

export class StudAddComponent{
    constructor(private studserv:StudentService){ }
    @Output() myflag=new EventEmitter();
    @Input("st") st1!:Student;
    show:boolean=false;
    id!:number;
    name!:string;
    std!:number;
    dob!:string;
    marks!:number;

    ngOnChanges(cng:SimpleChanges){
        if(cng["st1"].currentValue!=cng["st1"].previousValue){
            this.id=this.st1.id;
            this.name=this.st1.name;
            this.std=this.st1.std;
            this.dob=this.st1.dob;
            this.marks=this.st1.marks;
        }
        this.show=(typeof this.id==="undefined")? true:false;
    }
    addStud(){
        this.show=true;
        let st={id:this.id,name:this.name,std:this.std,dob:this.dob,marks:this.marks};
        this.studserv.addStudent(st);
        this.id=0;
        this.name="";
        this.std=0;
        this.dob="";
        this.marks=0;
        this.myflag.emit(false);

    }

    updateStud(){
        this.show=true;
        let st={id:this.id,name:this.name,std:this.std,dob:this.dob,marks:this.marks};
        this.studserv.updateStudent(st);
        this.id=0;
        this.name="";
        this.std=0;
        this.dob="";
        this.marks=0;
        this.myflag.emit(false);
    }
}
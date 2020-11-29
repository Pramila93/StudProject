import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/module/student';

@Component({
    selector:"slist",
    templateUrl:"./slist.component.html",
    styleUrls:["./slist.component.css"]
})
export class SlistComponent{

    @Output() editEvent=new EventEmitter();
    @Output() deleteEvent=new EventEmitter();
    @Output() showEvent=new EventEmitter();

    @Input() stud!:Student[];
   
    editStud(s:Student){
        this.editEvent.emit(s);
    }

    deleteStud(s:Student){
        this.deleteEvent.emit(s);
    }

    showStud(s:Student){
        this.showEvent.emit(s);
    }
}
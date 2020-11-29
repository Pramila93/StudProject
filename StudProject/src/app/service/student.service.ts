import { Student } from '../module/student';

export class StudentService{
    stuarr:Student[]=[{id:100,name:'Khushi',std:8,dob:'17/07/2007',marks:75.50},
                      {id:110,name:'Payal',std:7,dob:'16/06/2006',marks:70.50},
                      {id:120,name:'Eshwari',std:3,dob:'01/03/2012',marks:60.50},
                      {id:130,name:'Rajveer',std:1,dob:'20/02/2015',marks:80.75},
                      {id:140,name:'Shivansh',std:2,dob:'01/12/2016',marks:50.25}];


                      getAllStudents():Student[]{
                          return this.stuarr;
                      }

                      addStudent(st:Student){
                          this.stuarr.push(st);
                      }

                      updateStudent(st:Student){
                          for(let i=0;i<this.stuarr.length;i++){
                              if(this.stuarr[i].id==st.id){
                                  this.stuarr[i].name=st.name;
                                  this.stuarr[i].std=st.std;
                                  this.stuarr[i].dob=st.dob;
                                  this.stuarr[i].marks=st.marks;
                                  break;
                              }
                          }
                      }

                      deleteStudent(st:Student){
                        for(let i=0;i<this.stuarr.length;i++){
                            if(this.stuarr[i].id==st.id){
                                this.stuarr.splice(i,1);
                                break;
                            }
                        }
                    }
}
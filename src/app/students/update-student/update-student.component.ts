import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/Student";
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../../service/students/student.service";
import {$e} from "codelyzer/angular/styles/chars";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {
students:Student;
status='Form edit Student';
  error1:any={
    message:'no_name_student'
  };
  error2:any={
   message:'no_age_student'
  };
  error3:any={
    message:'no_avatar_avatar'
};
  error4:any={
    message:'no_address_student'
  }
  error5:any={
    message:'update_success!!!'
  };
  form:any={};
  constructor(private atRouter:ActivatedRoute,
              private studentService:StudentService) { }

  ngOnInit(): void {
    this.atRouter.paramMap.subscribe(ctgId=>{
      const id = +ctgId.get('id')
      console.log('iddddddddddddddd',id);
      this.studentService.detailStudent(id).subscribe(cts=>{
        console.log("datcts>>>",cts)
        this.students = cts;
      })
    })
  }
 ngSubmit(){
    this.studentService.updateStudent(this.students.id,this.students).subscribe((data:any)=>{
      console.log("dataaaa==>",data);
      if (data.message==this.error1.message){
        this.status='please upload is existed! Please try again!'
      }
      if (JSON.stringify(data)==JSON.stringify(this.error2)){
       this.status = 'Not_ageStudent'
      }
      if (JSON.stringify(data)==JSON.stringify(this.error3)){
        this.status = 'Please upload avatar or change name Category';
      }
      if (JSON.stringify(data)==JSON.stringify(this.error4)){
        this.status = 'Not_Address'
      }
      if (data.message == this.error5.message){
        this.status = 'Update_Success!!'
      }
    })
 }
 ChangeAvatar($event:any){
   console.log('cos vao day koooooo');
   this.students.avatar = $event;
 }
}

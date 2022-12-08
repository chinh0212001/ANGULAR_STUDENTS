import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/Student";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../service/students/student.service";

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.scss']
})
export class DeleteStudentComponent implements OnInit {
students:Student;
status = 'Form Delete Student'
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
  this.studentService.deleteStudent(this.students.id, this.students).subscribe((data:any)=>{
    console.log("datataatatat===>",data);
    if (data.message =='not_found'){
      this.status = 'ko ton tai'
    }else {
      this.status = "delete_success!!!"
    }
    })
  }
}

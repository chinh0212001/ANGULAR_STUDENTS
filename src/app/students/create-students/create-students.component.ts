import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../service/students/student.service";
import {Student} from "../../model/Student";

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.scss']
})
export class CreateStudentsComponent implements OnInit {
  status = 'Please fill in the form to Student';
  form: any = {};
  student:Student

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }

  createStudent() {
    this.student = new Student(
        this.form.id,
        this.form.name,
        this.form.age,
        this.form.avatar,
        this.form.address
    );
    if (this.form.avatar == undefined){
      this.status = 'Please upload avatar!'
    }
    this.studentService.createStudents(this.student).subscribe(data=>{
      console.log("dataStudent ====>>>>>",data);
      // @ts-ignore
      if (data.message === 'student_invalid'){
        this.status = 'student is existed! Please try again!'
        return;
      }
      // @ts-ignore
      if (data.message === "create_success!!!"){
        this.status = 'create students success!!!'
      }
    })
  }

  createAvatar($event: string) {
    this.form.avatar = $event
  }
}

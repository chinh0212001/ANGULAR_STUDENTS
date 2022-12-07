import {Component, OnInit, ViewChild} from '@angular/core';
import {Student} from "../../model/Student";
import {MatPaginator} from "@angular/material/paginator";
import {StudentService} from "../../service/students/student.service";
import {TokenService} from "../../service/token.service";
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})
export class ListStudentsComponent implements OnInit {
listStudent: Student[] = [];
  check = false;
  displayedColumn:string[] = ['id','name','age','avatar','address','delete','edit`'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(private studentService:StudentService,
              private tokenService:TokenService,
              private avtRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.listStudents();
    if (this.tokenService.getToken()){
      this.check = true;
    }
    this.avtRouter.paramMap.subscribe(ctgID =>{
      console.log('ctgid ---->',ctgID);
      const id = +ctgID.get('id')
      console.log('id===>',id);
    })
  }
listStudents(){
    this.studentService.showList().subscribe(data=>{
      // @ts-ignore
      this.listStudent = data;
      console.log("data/////////",data)
      this.dataSource = new MatTableDataSource<Student>(this.listStudent);
      this.dataSource.paginator = this.paginator;
    })
}
}

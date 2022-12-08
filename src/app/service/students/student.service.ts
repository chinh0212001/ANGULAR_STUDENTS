import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Student} from "../../model/Student";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private API_STUDENT = environment.API_SERVER +'student';
private API_LOCAL = environment.API_LOCAL+'student';
  constructor(private http:HttpClient) { }
  showList(){
  return this.http.get(this.API_STUDENT);
  }
  createStudents(students:Student){
    return this.http.post(this.API_STUDENT,students)
  }
  updateStudent(id:number,student:Student):Observable<Student>{
    return this.http.put<Student>(this.API_STUDENT+'/'+id,student)
  }
  detailStudent(id: number): Observable<any>{
    return this.http.get(this.API_STUDENT+'/'+id);
  }
  deleteStudent(id:number,students:Student):Observable<Student>{
    // @ts-ignore
    return this.http.delete<Student>(this.API_STUDENT+'/'+id,students);
  }
  
}


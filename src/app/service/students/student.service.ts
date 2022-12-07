import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Student} from "../../model/Student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private API_STUDENT = environment.API_SERVER +'student';
  constructor(private http:HttpClient) { }
  showList(){
  return this.http.get(this.API_STUDENT);
  }
  createStudents(students:Student){
    return this.http.post(this.API_STUDENT,students)
  }
}


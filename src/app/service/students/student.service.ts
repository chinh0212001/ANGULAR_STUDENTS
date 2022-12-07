import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private API_STUDENT = environment.API_SERVER +'student'
  constructor(private http:HttpClient) { }
  showList(){
  return this.http.get(this.API_STUDENT);
  }
}


import {Component, EventEmitter, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.scss']
})
export class ChildOutputComponent implements OnInit {
listStudents = [
  {id:1 , name:'Linh Ngố'},
  {id:2 , name:'Chinh hihi'}
]
  @Output()
  dataFormChild = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.dataFormChild.emit(this.listStudents);
  }

}

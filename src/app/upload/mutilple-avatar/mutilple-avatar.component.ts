import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import * as url from 'url';

@Component({
  selector: 'app-mutilple-avatar',
  templateUrl: './mutilple-avatar.component.html',
  styleUrls: ['./mutilple-avatar.component.scss']
})
export class MutilpleAvatarComponent implements OnInit {
selectFile: File[];
arrayFileInFirebase: AngularFireStorageReference;
arrUrlFormFirebase = [];
checkUploadMultiple = false;
@Output()
arrUrl = new EventEmitter<string[]>()
  constructor(private afService: AngularFireStorage) { }

  ngOnInit(): void {
  }

  uploadMultipleFile($event) {
    console.log("$Event>>>>>>>>>>>",$event);
    this.selectFile = $event.target.files;
  }
  upload(){
  this.checkUploadMultiple = true;
    for (let i = 0; i < this.selectFile.length; i++) {
      this.arrayFileInFirebase = this.afService.ref(this.selectFile[i].name);
      this.arrayFileInFirebase.put(this.selectFile[i]).then(data=>{
        return data.ref.getDownloadURL();
      }).then(url=>{
        this.checkUploadMultiple = false;
        this.arrUrlFormFirebase.push(url);
        this.arrUrl.emit(this.arrUrlFormFirebase)
      }).catch(error=>{
        console.log(`Upload Failed! ${error}`);
      })
    }
  }
}

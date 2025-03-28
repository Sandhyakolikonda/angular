import { Component } from '@angular/core';
import {apiservice} from './'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  movies: any = [];
  mname = '';
  murl = "";
  constructor(public as:ApiService) {
    this.as.getData().subscribe((res)=>this.movies=res)
  }
  remove(id:any) {
    this.as.deleteData(id).subscribe((res) => {
      console.log(res);
      window.location.reload()
    })
  }
  addMovie() {
    this.as.addData(this.mname, this.murl).subscribe((res) => {
      console.log(res);
       window.location.reload();
    })
  }
}
  


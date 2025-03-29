import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoading = false;
  q: any = {}; inp: string = ''
  apiRes: any = '';
  data:any=[]
  
  constructor(public as:AppService){
  }
  sendToAPI() {
    this.as.askAI(this.inp).subscribe((res:any) => {
      this.apiRes= res.candidates[0].content.parts[0].text
      console.log(res);
      this.data.push({
        user: this.inp,
        bot:this.apiRes
      })
      this.inp=''
    })
  }
}

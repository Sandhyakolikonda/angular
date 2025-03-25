import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  msg=''
  addMsg(m:string){
    this.msg = m;
  }
  receiveMsg(){  
    return this.msg;                                    

    
  }

  
}

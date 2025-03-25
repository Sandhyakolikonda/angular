import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public hc:HttpClient) { }
  askAI(que:string) {
    return this.hc.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBzpsNb9H6NfZWYNmLGpNpLrjOcXsRgqbo',
      {
        contents: [
          {
            parts: [{ text: que }],
          },
        ],
      }
    );
  }
}

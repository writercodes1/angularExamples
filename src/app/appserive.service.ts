import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AppseriveService {

  constructor(private reg:HttpClient) { }

    callerForApi(){
     return this.reg.get("https://jsonplaceholder.typicode.com/posts")
   }
  
}
 
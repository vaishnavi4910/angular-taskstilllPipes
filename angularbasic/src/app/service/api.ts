import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private readonly http = inject(HttpClient);
  // constructor(){
  //   readonly http: HttpClient;
  // }

  getApi(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");

  }
  
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) { 
    console.log("Http service started ..")
  }

  getPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
                    .map(res=>res.json());
  }


}

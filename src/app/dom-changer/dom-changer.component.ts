import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dom-changer',
  templateUrl: './dom-changer.component.html',
  styleUrls: ['./dom-changer.component.css']
})
export class DomChangerComponent implements OnInit {

  name : string;
  age:number;
  address:Address;
  hobbies:string[];
  posts: Post[];

  constructor(private dataService:DataService) { }

  ngOnInit() {

      this.name = "Vishruti Mhatre";
      this.age = 25;

      this.address= {
        street: '329 N First Street',
        state: 'California',
        zipcode: '95110'
      };

      this.hobbies = ['Coding', 'Football', 'Reading nonfiction'];

      this.dataService.getPost().subscribe((posts) => {
        console.log(posts);
        this.posts = posts;
      });
  }

  onClickAddToList(){
      this.hobbies.unshift('New hobby');
  }

}

interface Address{
  street:string,
  zipcode: string,
  state: string,
}

interface Post{
  id: number,
  title:string,
  body:string,
  userId:number
}
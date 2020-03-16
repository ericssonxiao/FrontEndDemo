import { Component, OnInit } from '@angular/core';
import { News } from '../models'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
  public title = "line 9 : news title";
  public student:any = "I am a student data";
  msg = "this is test message";

  public userinfo:any = {
    name:'jerry',
    age:20
  };

  public content:string = "<h1>this is test H1 content</h1>";
  public list:any[] = ["111","222","333",909,100];
  public items:Array<string> = ['jerry','alex','flex'];
  public userarrays:any[]=[{
    name:'jerry',
    age:20
  },{
    name:'alex',
    age:30
  },{
    name:'flex',
    age:40
  }];

  constructor() { 
    this.title = "line 11: news title update";
    console.log(this.title);
    this.title = "line 21 : news title update";
  }

  ngOnInit(): void {
  }

}

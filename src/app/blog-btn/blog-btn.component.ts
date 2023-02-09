import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-btn',
  templateUrl: './blog-btn.component.html',
  styleUrls: ['./blog-btn.component.css']
})
export class BlogBtnComponent{

  myFunc(){
    //alert("welcome");
    window.open("https://p4n.in/","_self");
  }
  
  
}

import { Component,OnInit } from '@angular/core';
import { PostService } from './post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'food-app';
  posts:any;
  constructor(private service:PostService) {}

  

  ngOnInit() {

      this.service.getPosts()

        .subscribe(response => {

          this.posts = response;

        });

  }

}  


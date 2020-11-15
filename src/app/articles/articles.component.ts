import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ArticleService } from './articles.service'
import { Articles } from '../models/article';
import { webSocket } from "rxjs/webSocket";
const subject = webSocket("");


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],

})
export class ArticlesComponent implements OnInit {



  // article = {} as Article;
  articles: Articles[];
  constructor(
    private http: HttpClient,
    private service: ArticleService,

    ) {
 
    this.articles=[];
    }
    private update = {

        message: "this is a test"

    };

   ngOnInit() {
    this.service.list().subscribe(res=>this.articles );
    // this.service.list().subscribe(res=>this.articles);
    subject.subscribe(
      msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
      err => console.log(err + " error"), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );
  }


}



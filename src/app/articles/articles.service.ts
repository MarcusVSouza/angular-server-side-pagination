import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articles } from '../models/article';

import * as Rx from "rxjs";
import {  Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root',
})
export class ArticleService{


  
  private key = 'base64:ZqixsKWZ4h9V/5XeiG1B54ZZbN0hM3fHYTyPaQoz6NI=';

  private readonly  baseUrl = 'http://localhost:8000/api/articles';

  constructor(private http: HttpClient) {}

  //  public list(){
  //   return this.http
  //        .get(this.baseUrl, {responseType: 'text'})

  //  }


  // post method example
  //  this.http.post("/courses/-KgVwECOnlc-LHb_B0cQ.json",
  //   {
  //       "courseListIcon": "...",
  //       "description": "TEST",
  //       "iconUrl": "..",
  //       "longDescription": "...",
  //       "url": "new-url"
  //   })


  list(): Observable<Articles[]> {
    const url = `${this.baseUrl}/`;

    // console.log(Articles)
    return this.http
      .get(url)
      .pipe(
        map((data: Articles[]) => {
          console.log(data)
          // let decrypted = CryptoJS.AES.decrypt(data, this.key);
          
          // let readable = decrypted.toString(CryptoJS.enc.Utf8);
          // console.log(readable + ' readable')
          return data;

        })
        , 
        // catchError( error => {
        //   return throwError( 'Something went wrong!' );
        // })
        );

      }


  //   // Object.keys(data).map(item => {...});
  //   //Object.keys(data).forEach(item => {...});

  // }


}

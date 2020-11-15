import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {ArticleService} from './articles.service'


@NgModule({
  declarations: [],
  providers:[
    ArticleService,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ArticleService

  ]
})
export class ArticlesModule { }

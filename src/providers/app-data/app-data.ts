import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AppDataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppDataProvider {

  baseUrl = "https://mcraftguide.com"

  constructor(public http: HttpClient) {
  }

  getCraftItems(): Observable<any> {
    return this.http.get(this.baseUrl+"/api/crafting").pipe(
      map(this.extractData)
    );
  }

  getBlogs(): Observable<any> {
    return this.http.get(this.baseUrl+"/api/blog").pipe(
      map(this.extractData)
    );
  }

  postBlog(title, author, description) {

    let blog = {};
    blog['title'] = title;
    blog['author'] = author;
    blog['description'] = description;
    blog['comments'] = [];

    this.http.post(this.baseUrl+"/api/blog", blog).subscribe(res => {
      console.log(res);
    });;

  }

  postComment(data, blogId) {

    let comment = {};
    comment['description'] = data.comment;
    comment['author'] = data.author;

    let url = this.baseUrl+"/api/blog/"+blogId+"/comments";
    this.http.post(url, comment).subscribe(res => {
      console.log(res);
    });;

  }

  private extractData(res: Response){
    let body = res;
    return body;
  }


}

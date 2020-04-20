import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AppDataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppDataProvider {

  constructor(public http: HttpClient) {
  }

  getCraftItems(): Observable<any> {
    return this.http.get('http://18.209.75.49/api/crafting').pipe();
  }

  getBlogs(): Observable<any> {
    return this.http.get('http://18.209.75.49/api/blog').pipe();
  }

  postBlog(title, author, description) {

    let blog = {};
    blog['title'] = title;
    blog['author'] = author;
    blog['description'] = description;
    blog['comments'] = [];

    this.http.post('http://18.209.75.49/api/blog', blog).subscribe(res => {
      console.log(res);
    });;

  }

  postComment(data, blogId) {

    let comment = {};
    comment['description'] = data.comment;
    comment['author'] = data.author;

    let url = 'http://18.209.75.49/api/blog/'+blogId+'/comments';
    this.http.post(url, comment).subscribe(res => {
      console.log(res);
    });;

  }

  // private extractData(res: Response){
  //   let body = res;
  //   return body || [];
  // }
  //
  //
  // private handleError(error: Response | any){
  //   let errMsg: string;
  //   if (error instanceof Response){
  //     const err = error || '';
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   return errMsg;
  // }

}

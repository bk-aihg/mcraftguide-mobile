import { Component } from '@angular/core';

import { AppDataProvider } from '../../providers/app-data/app-data'
import { InputDialogserviceProvider } from '../../providers/input-dialogservice/input-dialogservice'

/**
 * Generated class for the BlogComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'blog',
  templateUrl: 'blog.html'
})
export class BlogComponent {

  blogs = [];
  title: string;
  author: string;
  description: string;
  comment: string;

  constructor(public dataService: AppDataProvider, public inputDialog: InputDialogserviceProvider) { }

  ngOnInit() {
    this.loadBlogs();
  }

  loadBlogs() {
    this.dataService.getBlogs()
      .subscribe(blogs => this.blogs = blogs);
  }

  openBlogDialog() {
    this.inputDialog.showBlogPrompt();
  }

  openCommentDialog(blogId) {
    this.inputDialog.showCommentPrompt(blogId);
  }

}

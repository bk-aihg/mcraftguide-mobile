import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { AppDataProvider } from '../app-data/app-data';

/*
  Generated class for the InputDialogserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogserviceProvider {

  constructor(public dataService: AppDataProvider, public alertCtrl: AlertController) { }

  showBlogPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Blog',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
        {
          name: 'author',
          placeholder: 'Author'
        },
        {
          name: 'description',
          placeholder: 'Description'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved Clicked', item);
            this.dataService.postBlog(item.title, item.author, item.description)
          }
        }
      ]
    });
    prompt.present();

  }

  showCommentPrompt(blogId) {
    const prompt = this.alertCtrl.create({
      title: 'Add Comment',
      inputs: [
        {
          name: 'comment',
          placeholder: 'Comment'
        },
        {
          name: 'author',
          placeholder: 'Author'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved Clicked', item);
            this.dataService.postComment(item, blogId)
          }
        }
      ]
    });
    prompt.present();

  }
}

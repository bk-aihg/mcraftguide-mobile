import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing';

import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from '../components/home/home.module';
import { HomePage } from '../pages/home/home';

import { MyApp } from './app.component';
import { AppDataProvider } from '../providers/app-data/app-data';

import { CraftingComponent }  from '../components/crafting/crafting';
import { BlogComponent }  from '../components/blog/blog';
import { InputDialogserviceProvider } from '../providers/input-dialogservice/input-dialogservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CraftingComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppDataProvider,
    InputDialogserviceProvider,
    SocialSharing
  ]
})
export class AppModule {
   constructor(router: Router) {}
}

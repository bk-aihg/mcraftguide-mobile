webpackJsonp([0],{

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CraftingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_social_sharing__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_data_app_data__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CraftingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CraftingComponent = /** @class */ (function () {
    function CraftingComponent(dataService, socialSharing) {
        this.dataService = dataService;
        this.socialSharing = socialSharing;
        this.items = [];
        this.childItems = [];
        this.loadItems();
    }
    CraftingComponent.prototype.loadItems = function () {
        var _this = this;
        this.dataService.getCraftItems()
            .subscribe(function (items) { return _this.items = items; });
    };
    CraftingComponent.prototype.shareItem = function (item, index) {
        console.log('bk');
        var message = "Craftin Item Details - " + item;
        this.socialSharing.share(message).then(function () {
            console.log("Shared Succcessfully");
        }).catch(function (error) {
            console.error("Error while sharring ", error);
        });
    };
    CraftingComponent.prototype.toggleChild = function (child) {
        var id = 'parent-' + child.itemId;
        var c = document.getElementById(id);
        var d = c.getElementsByClassName("childNode");
        for (var i = 0; i < d.length; i++) {
        }
    };
    CraftingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'crafting',template:/*ion-inline-start:"/Users/bk/Documents/Masters-SD/Maryville/Sping 2020/Session B/SWDV 665 - SOFTWARE DVLPMNT/mcraftguide-mobile/mcraftguide-mobile/src/components/crafting/crafting.html"*/'<!-- Generated template for the CraftingComponent component -->\n<ion-content class="background">\n<div class="col-sm-12">\n  <a href="">\n    <i class="fa fa-home fa-3x header-home-image" aria-hidden="true"></i>\n  </a>\n</div>\n<div id="crafting" class="crafting col-sm-12">\n  <div *ngFor="let item of items" aria-label="crafting" id="parent-{{item.itemId}}" style="height:auto;" class="node col-sm-6"\n    (click)="ele.class = ele.class == \'showChildren\' ? \'\' :  \'showChildren\'"\n    [ngClass]="{ hideChildren : ele.class !== \'showChildren\' }" #ele>\n    <img class="craftImg" src="../assets/imgs/{{item.image}}">\n    <span class="name">{{item.name}}</span>\n    <span class="padding-left=md" (click)="shareItem(item)">\n      <i class="fa fa-2x fa-share shareImage"></i>\n    </span>\n    <span class="number">{{item.number}}</span>\n    <div *ngFor="let child of item.need" id="child-{{child.itemId}}" class="childNode col-sm-6">\n      <img class="craftImg" src="../assets/imgs/{{child.image}}">\n      <span class="name">{{child.name}}</span>\n      <span class="number">{{child.number}}</span>\n    </div>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/bk/Documents/Masters-SD/Maryville/Sping 2020/Session B/SWDV 665 - SOFTWARE DVLPMNT/mcraftguide-mobile/mcraftguide-mobile/src/components/crafting/crafting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_app_data_app_data__["a" /* AppDataProvider */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], CraftingComponent);
    return CraftingComponent;
}());

//# sourceMappingURL=crafting.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app_data_app_data__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_input_dialogservice_input_dialogservice__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BlogComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BlogComponent = /** @class */ (function () {
    function BlogComponent(dataService, inputDialog) {
        this.dataService = dataService;
        this.inputDialog = inputDialog;
        this.blogs = [];
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.loadBlogs();
    };
    BlogComponent.prototype.loadBlogs = function () {
        var _this = this;
        this.dataService.getBlogs()
            .subscribe(function (blogs) { return _this.blogs = blogs; });
    };
    BlogComponent.prototype.openBlogDialog = function () {
        this.inputDialog.showBlogPrompt();
    };
    BlogComponent.prototype.openCommentDialog = function (blogId) {
        this.inputDialog.showCommentPrompt(blogId);
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'blog',template:/*ion-inline-start:"/Users/bk/Documents/Masters-SD/Maryville/Sping 2020/Session B/SWDV 665 - SOFTWARE DVLPMNT/mcraftguide-mobile/mcraftguide-mobile/src/components/blog/blog.html"*/'<!-- Generated template for the BlogComponent component -->\n<ion-content class="background">\n  <div class="col-sm-12">\n    <a href="">\n      <i class="fa fa-home fa-3x header-home-image" aria-hidden="true"></i>\n    </a>\n  </div>\n  <div id="blog" class="blog col-sm-6">\n    <div class="blogNode row">\n      <div class="col-sm-6=">\n        <span class="createDate" style="padding-left:10px;">Add Blog</span>\n        <span (click)="openBlogDialog()">\n          <i class="fa fa-2x fa-plus addBlogImage"></i>\n        </span>\n      </div>\n    </div>\n\n    <div *ngFor="let blog of blogs" aria-label="blog" id="parent-{{blog.blogId}}" class="blogNode row" (click)="ele.class = ele.class == \'showChildren\' ? \'\' :  \'showChildren\'" #ele>\n      <div class="col-sm-6"><span class="name">{{blog.title}}</span></div>\n      <div class="col-sm-6">\n        <span class="author">{{blog.author}}</span>\n        <span class="createDate">{{blog.date}}</span>\n      </div>\n      <div id="child-{{blog.blogId}}" class="blogNode" [ngClass]="{ hideChildren : ele.class !== \'showChildren\' }">\n        <div style="col-sm-6">\n          <span class="description">{{blog.description}}</span>\n        </div>\n        <div class="commentNode">\n          <span class="createDate" style="padding-right:100px;">Add Comments</span>\n          <span (click)="openCommentDialog(blog.blogId)">\n            <i class="fa fa-2x fa-plus addBlogImage"></i>\n          </span>\n        </div>\n        <div *ngFor="let comment of blog.comments" class="commentNode">\n          <div class="col-sm-6"><span class="name">{{comment.description}}</span></div>\n          <div class="col-sm-6">\n            <span class="author">{{comment.author}}</span>\n            <span class="createDate">{{comment.date}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/bk/Documents/Masters-SD/Maryville/Sping 2020/Session B/SWDV 665 - SOFTWARE DVLPMNT/mcraftguide-mobile/mcraftguide-mobile/src/components/blog/blog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_app_data_app_data__["a" /* AppDataProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_input_dialogservice_input_dialogservice__["a" /* InputDialogserviceProvider */]])
    ], BlogComponent);
    return BlogComponent;
}());

//# sourceMappingURL=blog.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDialogserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_data_app_data__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the InputDialogserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var InputDialogserviceProvider = /** @class */ (function () {
    function InputDialogserviceProvider(dataService, alertCtrl) {
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
    }
    InputDialogserviceProvider.prototype.showBlogPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (item) {
                        console.log('Saved Clicked', item);
                        _this.dataService.postBlog(item.title, item.author, item.description);
                    }
                }
            ]
        });
        prompt.present();
    };
    InputDialogserviceProvider.prototype.showCommentPrompt = function (blogId) {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (item) {
                        console.log('Saved Clicked', item);
                        _this.dataService.postComment(item, blogId);
                    }
                }
            ]
        });
        prompt.present();
    };
    InputDialogserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_data_app_data__["a" /* AppDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InputDialogserviceProvider);
    return InputDialogserviceProvider;
}());

//# sourceMappingURL=input-dialogservice.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the HomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.navigation = [{
                'id': '1',
                'name': 'Crafting',
                'image': 'crafting.jpeg',
                'router': 'crafting'
            }, {
                'id': '2',
                'name': 'Blog Post',
                'image': 'blog.jpeg',
                'router': 'blog'
            }, {
                'id': '3',
                'name': 'Coming Soon',
                'image': 'comingSoon.jpeg',
                'router': 'http://google.com'
            }, {
                'id': '4',
                'name': 'Coming Soon',
                'image': 'comingSoon.jpeg',
                'router': 'http://google.com'
            }];
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home',template:/*ion-inline-start:"/Users/bk/Documents/Masters-SD/Maryville/Sping 2020/Session B/SWDV 665 - SOFTWARE DVLPMNT/mcraftguide-mobile/mcraftguide-mobile/src/components/home/home.html"*/'\n  <div class="title">\n    <h2 class="home-title" align="center">Minecraft Guide</h2>\n    <h5 class="home-version" align="center">Version 1.0.0</h5>\n  </div>\n  <div class="main-body">\n    <div id="main-page-body-content" align="center" class="main-page-body-content col-sm-12">\n      <div *ngFor="let nav of navigation" id="{{nav.id}}" class="main-body-widget" aria-label="Main Body Thumbnail Image">\n        <a routerLink="/{{nav.router}}">\n          <img class="thumbnailImg" src="../assets/imgs/{{nav.image}}">\n          <div class="thumbnailTxt">{{nav.name}}</div>\n        </a>\n      </div>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n'/*ion-inline-end:"/Users/bk/Documents/Masters-SD/Maryville/Sping 2020/Session B/SWDV 665 - SOFTWARE DVLPMNT/mcraftguide-mobile/mcraftguide-mobile/src/components/home/home.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/bk/Documents/Masters-SD/Maryville/Sping 2020/Session B/SWDV 665 - SOFTWARE DVLPMNT/mcraftguide-mobile/mcraftguide-mobile/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v3">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/bk/Documents/Masters-SD/Maryville/Sping 2020/Session B/SWDV 665 - SOFTWARE DVLPMNT/mcraftguide-mobile/mcraftguide-mobile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(265);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_module__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_app_data_app_data__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_crafting_crafting__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_blog_blog__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_input_dialogservice_input_dialogservice__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = /** @class */ (function () {
    function AppModule(router) {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__components_crafting_crafting__["a" /* CraftingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_blog_blog__["a" /* BlogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_app_data_app_data__["a" /* AppDataProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_input_dialogservice_input_dialogservice__["a" /* InputDialogserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_crafting_crafting__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_blog_blog__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { HomeComponent }  from '../components/home/home';


var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'crafting',
        component: __WEBPACK_IMPORTED_MODULE_2__components_crafting_crafting__["a" /* CraftingComponent */]
    },
    {
        path: 'blog',
        component: __WEBPACK_IMPORTED_MODULE_3__components_blog_blog__["a" /* BlogComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing_module__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__home_routing_module__["a" /* HomeRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomeComponent */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var homeRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomeComponent */] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(homeRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',template:/*ion-inline-start:"/Users/bk/Documents/Masters-SD/Maryville/Sping 2020/Session B/SWDV 665 - SOFTWARE DVLPMNT/mcraftguide-mobile/mcraftguide-mobile/src/app/app.html"*/'<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n<router-outlet></router-outlet>\n'/*ion-inline-end:"/Users/bk/Documents/Masters-SD/Maryville/Sping 2020/Session B/SWDV 665 - SOFTWARE DVLPMNT/mcraftguide-mobile/mcraftguide-mobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AppDataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppDataProvider = /** @class */ (function () {
    function AppDataProvider(http) {
        this.http = http;
        this.baseUrl = "https://mcraftguide.com";
    }
    AppDataProvider.prototype.getCraftItems = function () {
        return this.http.get(this.baseUrl + "/api/crafting").pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(this.extractData));
    };
    AppDataProvider.prototype.getBlogs = function () {
        return this.http.get(this.baseUrl + "/api/blog").pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(this.extractData));
    };
    AppDataProvider.prototype.postBlog = function (title, author, description) {
        var blog = {};
        blog['title'] = title;
        blog['author'] = author;
        blog['description'] = description;
        blog['comments'] = [];
        this.http.post(this.baseUrl + "/api/blog", blog).subscribe(function (res) {
            console.log(res);
        });
        ;
    };
    AppDataProvider.prototype.postComment = function (data, blogId) {
        var comment = {};
        comment['description'] = data.comment;
        comment['author'] = data.author;
        var url = this.baseUrl + "/api/blog/" + blogId + "/comments";
        this.http.post(url, comment).subscribe(function (res) {
            console.log(res);
        });
        ;
    };
    AppDataProvider.prototype.extractData = function (res) {
        var body = res;
        return body;
    };
    AppDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppDataProvider);
    return AppDataProvider;
}());

//# sourceMappingURL=app-data.js.map

/***/ })

},[257]);
//# sourceMappingURL=main.js.map
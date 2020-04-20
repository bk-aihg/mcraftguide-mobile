import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }  from '../components/home/home';
import { CraftingComponent }  from '../components/crafting/crafting';
import { BlogComponent }  from '../components/blog/blog';

const appRoutes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'crafting',
    component: CraftingComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

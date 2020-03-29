import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddItemComponent} from "./components/add-item/add-item.component";
import {ItemsComponent} from "./components/items/items.component";
import {ModifyItemsPageComponent} from "./components/modify-items-page/modify-items-page.component";


const routes: Routes = [
  { path: 'add-item', component: AddItemComponent },
  { path: 'view-items', component: ModifyItemsPageComponent },
  { path: 'items',      component: ItemsComponent },
  { path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  },

  // { path: '**', component: PageNotFoundComponent }
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

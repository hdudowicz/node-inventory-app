import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import {HttpClientModule} from "@angular/common/http";
import { AddItemComponent } from './components/add-item/add-item.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ModifyItemsPageComponent } from './components/modify-items-page/modify-items-page.component';
import { ModifyItemComponent } from './components/modify-item/modify-item.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemCardComponent,
    AddItemComponent,
    ModifyItemsPageComponent,
    ModifyItemComponent,
    ItemListComponent,
    ListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

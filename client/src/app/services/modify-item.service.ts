import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Item} from "../model/item";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ModifyItemService {
  url: string = "//localhost:3000/modify";

  constructor(private httpClient: HttpClient) { }

  currentItemSource = new Subject<Item>();

  cuerrentItem$ = this.currentItemSource.asObservable();

  announceItem(item: Item){
    this.currentItemSource.next(item)
  }

  modifyItem(item: Item): Observable<Item>{
    return this.httpClient.post<Item>(this.url, item)
  }
}

import {Injectable} from '@angular/core';
import {Item} from "../model/item";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
  url: string = "//localhost:3000/items";

  constructor(private httpClient: HttpClient) {
  }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.url);
  }
}

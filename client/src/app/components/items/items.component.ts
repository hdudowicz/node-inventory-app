import { Component, OnInit } from '@angular/core';
import {ItemsServiceService} from "../../services/items-service.service";
import {Item} from "../../model/item";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(private itemsServiceService: ItemsServiceService) {
  }

  ngOnInit(): void {
    this.itemsServiceService.getItems().subscribe((data: Item[]) => {
      this.items = data;
    });
  }

}

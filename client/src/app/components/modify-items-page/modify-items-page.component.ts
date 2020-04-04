import {Component, Input, OnInit} from '@angular/core';
import {ModifyItemService} from "../../services/modify-item.service";
import {Item} from "../../model/item";
import {ItemsServiceService} from "../../services/items-service.service";

@Component({
  selector: 'app-modify-items-page',
  templateUrl: './modify-items-page.component.html',
  styleUrls: ['./modify-items-page.component.css'],
  providers: [ModifyItemService]
})
export class ModifyItemsPageComponent implements OnInit {
  item: Item;
  items: Item[];


  constructor(private modifyItemService: ModifyItemService, private itemsServiceService: ItemsServiceService) {

  }

  announce(){
    this.modifyItemService.announceItem(this.item);
    console.log("Item announced")

  }

  ngOnInit(): void {
    this.modifyItemService.cuerrentItem$.subscribe(
      item => {
        this.item = item;
        console.log(JSON.stringify(item))

      }
    );

    this.itemsServiceService.getItems().subscribe((data) => {
      this.items = data
    })
  }

}

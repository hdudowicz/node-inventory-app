import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../model/item";
import {ModifyItemService} from "../../services/modify-item.service";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() item: Item;
  constructor(public modifyItemService: ModifyItemService) { }

  ngOnInit(): void {
  }

}

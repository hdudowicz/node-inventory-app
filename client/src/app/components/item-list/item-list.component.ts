import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../model/item";
import {ItemsServiceService} from "../../services/items-service.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() items;

  constructor() { }

  ngOnInit(): void {

  }

}

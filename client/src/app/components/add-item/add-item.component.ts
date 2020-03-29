import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ItemsServiceService} from "../../services/items-service.service";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  addItemForm;

  constructor(private formBuilder: FormBuilder, private itemsServiceService: ItemsServiceService) {
    this.addItemForm = this.formBuilder.group({
    title: '',
    description: '',
    price: '',
    stock: '',
    imageURL: ''
    });
  }

  ngOnInit(): void {

  }

  onSubmit(formData){
    this.itemsServiceService.createItem(formData).subscribe((data) => {
      console.log(data);
    });
  }

}

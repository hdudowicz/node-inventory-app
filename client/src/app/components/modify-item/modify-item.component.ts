import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../model/item";
import {ModifyItemService} from "../../services/modify-item.service";
import {Subscription} from "rxjs";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-modify-item',
  templateUrl: './modify-item.component.html',
  styleUrls: ['./modify-item.component.css'],
  providers: [ModifyItemService]
})
export class ModifyItemComponent implements OnInit {
  @Input() item : Item;
  subscription: Subscription;
  error;
  modifyItemForm;


  constructor(private modifyItemService: ModifyItemService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    // this.subscription = this.modifyItemService.cuerrentItem$.subscribe(
    //   item => {
    //     this.item = item;
    //     console.log(JSON.stringify(item))
    //   }
    // );

    this.modifyItemForm = this.formBuilder.group({
      _id: this.item._id,
      title: this.item.title,
      description: this.item.description,
      price: this.item.price,
      stock: this.item.stock,
      imageURL: this.item.imageURL
    });
  }

  onSubmit(formData){
    this.modifyItemService.modifyItem(formData).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.error(error);
      this.error = error
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}

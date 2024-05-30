import { ShopingLestService } from './../../sherde/shoping-lest.service';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../sherde/ingredienes.model';

@Component({
  selector: 'app-shopeing-edit',
  templateUrl: './shopeing-edit.component.html',
  styleUrl: './shopeing-edit.component.scss',
})
export class ShopeingEditComponent {
  @ViewChild('naemimput', { static: true }) naemref?: ElementRef;
  @ViewChild('amontinput', { static: true }) amountref?: ElementRef;
  constructor(private ShopingLestService: ShopingLestService) {}
  onaddaitm() {
    const newIngredient = new Ingredient(
      this.naemref?.nativeElement.value,
      this.amountref?.nativeElement.value
    );
    this.ShopingLestService.oningredientadd(newIngredient);
  }
}

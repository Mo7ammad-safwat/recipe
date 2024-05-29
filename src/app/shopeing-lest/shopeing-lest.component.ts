import { Ingredient } from './../sherde/ingredienes.model';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-shopeing-lest',
  templateUrl: './shopeing-lest.component.html',
  styleUrl: './shopeing-lest.component.scss',
})
export class ShopeingLestComponent {

  Ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
    new Ingredient('Potato', 15),
  ];
  oningredientadd(ingredient: Ingredient) {
    this.Ingredients.push(ingredient);
  }

}

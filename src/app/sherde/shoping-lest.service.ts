import { Injectable } from '@angular/core';
import { Ingredient } from './ingredienes.model';

@Injectable({
  providedIn: 'root',
})
export class ShopingLestService {
  Ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
    new Ingredient('Potato', 15),
  ];
  constructor() {}
  onslectingredien() {
    return this.Ingredients;
  }
  oningredientadd(ingredient: Ingredient) {
    this.Ingredients.push(ingredient);
  }
}

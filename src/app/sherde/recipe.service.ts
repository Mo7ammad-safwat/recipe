import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './Recipe.model';
import { Ingredient } from './ingredienes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recpeslice = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe1',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'A Test Recipe2',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
  ];

  constructor() {}
  gitrecpe() {
    return this.recipes;
  }
}

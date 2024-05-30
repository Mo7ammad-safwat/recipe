import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Recipe } from '../sherde/Recipe.model';
import { RecipeService } from '../sherde/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translateX(0)',
        })
      ),
      state(
        'out',
        style({
          transform: 'translateX(100%)',
        })
      ),
      transition('out => in', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out'),
      ]),
      transition('in => out', [
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class RecipeComponent implements OnInit{
  selectedRecipe?: Recipe;
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipeService.recpeslice.subscribe((recipe: Recipe) => {

      this.selectedRecipe = recipe;});
    }

}

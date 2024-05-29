import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './Recipe.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
export class RecipeComponent {
  selectedRecipe?: Recipe;
}

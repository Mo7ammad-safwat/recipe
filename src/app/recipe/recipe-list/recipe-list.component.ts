import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import { Recipe } from '../../sherde/Recipe.model';
import { RecipeService } from '../../sherde/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
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
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recpeservs: RecipeService) {}
  ngOnInit(): void {
    this.recipes = this.recpeservs.gitrecpe();
  }
  onselectRecipe(recipe: Recipe) {
    this.recpeservs.recpeslice.emit(recipe);
  }
}

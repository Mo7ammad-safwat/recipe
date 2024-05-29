import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-recipe-detals',
  templateUrl: './recipe-detals.component.html',
  styleUrl: './recipe-detals.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate(300)]),
    ]),
  ],
})
export class RecipeDetalsComponent {
  @Input() recipe?: Recipe;
  botondesibl = true;
}

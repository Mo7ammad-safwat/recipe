import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../Recipe.model';

@Component({
  selector: 'app-recipe-itm',
  templateUrl: './recipe-itm.component.html',
  styleUrl: './recipe-itm.component.scss',
})
export class RecipeItmComponent {
  @Input() recipe?: Recipe;
  botondesibl=true;
}


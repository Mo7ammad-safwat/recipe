import { ShopingLestService } from '../sherde/shoping-lest.service';
import { Ingredient } from './../sherde/ingredienes.model';
import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-shopeing-lest',
  templateUrl: './shopeing-lest.component.html',
  styleUrl: './shopeing-lest.component.scss',
})
export class ShopeingLestComponent implements OnInit{
  Ingredients: Ingredient[] = [];
  constructor(private shopinglestservs:ShopingLestService) {}
  ngOnInit(): void {
    this.Ingredients = this.shopinglestservs.onslectingredien();

  }


 

}

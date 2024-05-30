import { Ingredient } from './ingredienes.model';
export class Recipe {
  public neam?: string;
  public description?: string;
  public imagePath?: string;
  public Ingredient?: Ingredient[];
  constructor(neam: string, description: string, imagePath: string, Ingredient?: Ingredient[]) {
    this.neam = neam ;
    this.description = description;
    this.imagePath = imagePath;
    this.Ingredient = Ingredient;
  }
}

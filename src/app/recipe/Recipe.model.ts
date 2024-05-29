export class Recipe {
  public neam?: string;
  public description?: string;
  public imagePath?: string; // إضافة خاصية الصورة
  constructor(neam: string, description: string, imagePath: string) {
    this.neam = neam ;
    this.description = description;
    this.imagePath = imagePath;
  }
}

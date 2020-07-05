export class Recipe {
  id: string;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  sourceName: string;
  sourceUrl: string;
  ingredients: any[];

  constructor(recipe: Partial<Recipe>) {
    Object.assign(this, recipe);
  }
}

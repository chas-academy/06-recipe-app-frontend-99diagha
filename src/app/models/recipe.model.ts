export class Recipe {
  id: string;
  name: string;
  source: {
    displayName: string,
    recipeUrl: string
  };
  imageUrl: string;
  ingredients: [];
  servings: number;
  duration: string;

  constructor(recipe: Partial<Recipe>) {
    Object.assign(this, recipe);
  }
}

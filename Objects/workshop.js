const recipes = [];

const recipe1 = {
  name: 'Spaghetti Carbonara',
  ingredients: ['spaghetti', 'Parmesan cheese', 'pancetta', 'black pepper'],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 5, 4, 5],
  averageRating: null,
};

const recipe2 = {
  name: 'Chicken Curry',
  ingredients: ['chicken breast', 'coconut milk', 'curry powder', 'onion', 'garlic'],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 5, 5, 5],
  averageRating: null,
};

const recipe3 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrot', 'bell pepper'],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

recipes.push(recipe1, recipe2, recipe3);

let getAverageRating = (ratingsArray) =>{
  let total=0;
  for (const rate of ratingsArray){
    total +=rate}
  return total/ratingsArray.length
}

console.log(getAverageRating(recipe1.ratings))

const getTotalIngredients  = ingredients => ingredients.length

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return 'easy';
  } else if (cookingTime <= 60) {
    return 'medium';
  } else {
    return 'hard';
  }
}

const recipe1AverageRating = getAverageRating(recipe1.ratings);
console.log(recipe1AverageRating);

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

recipe1.averageRating = recipe1AverageRating
recipe1.totalIngredients = recipe1TotalIngredients
recipe1.difficultyLevel = recipe1DifficultyLevel

const recipe2AverageRating = getAverageRating(recipe2.ratings);
console.log(recipe2AverageRating);

const recipe2TotalIngredients = getTotalIngredients(recipe2.ingredients);
console.log(recipe2TotalIngredients);

const recipe2DifficultyLevel = getDifficultyLevel(recipe2.cookingTime);
console.log(recipe2DifficultyLevel);

recipe2.averageRating = getAverageRating(recipe2.ratings);
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients)
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime)

const recipe3AverageRating = getAverageRating(recipe3.ratings);
console.log(recipe3AverageRating);

const recipe3TotalIngredients = getTotalIngredients(recipe3.ingredients);
console.log(recipe3TotalIngredients);

const recipe3DifficultyLevel = getDifficultyLevel(recipe3.cookingTime);
console.log(recipe3DifficultyLevel);

recipe3.averageRating = getAverageRating(recipe3.ratings);
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients)
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime)

console.log(recipes)

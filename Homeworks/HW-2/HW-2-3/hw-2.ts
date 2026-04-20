interface Recipe {
    id: number;
    name: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    rating: number;
    reviewCount: number;
    ingredients: string[];
    instructions: string[];
    image: string;
}

interface RecipesResponse {
    recipes: Recipe[];
}

const recipesDiv = document.getElementById("recipes") as HTMLDivElement;

fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then((recipesObject: RecipesResponse) => {
        const { recipes } = recipesObject;

        for (const recipe of recipes) {
            const div: HTMLDivElement = document.createElement("div");
            div.classList.add("recipe-container");

            const divWithInfo: HTMLDivElement = document.createElement("div");
            divWithInfo.innerText = `
        id: ${recipe.id},
        name: ${recipe.name},
        prepTimeMinutes: ${recipe.prepTimeMinutes},
        cookTimeMinutes: ${recipe.cookTimeMinutes},
        servings: ${recipe.servings},
        difficulty: ${recipe.difficulty},
        cuisine: ${recipe.cuisine},
        caloriesPerServing: ${recipe.caloriesPerServing},
        rating: ${recipe.rating},
        reviewCount: ${recipe.reviewCount}
      `;

            const ulIngredients: HTMLUListElement = document.createElement("ul");
            ulIngredients.innerText = "Ingredients:";
            for (const ingredient of recipe.ingredients) {
                const li: HTMLLIElement = document.createElement("li");
                li.innerText = ingredient;
                ulIngredients.appendChild(li);
            }
            const olInstructions: HTMLOListElement = document.createElement("ol");
            olInstructions.innerText = "Instructions:";
            for (const step of recipe.instructions) {
                const li: HTMLLIElement = document.createElement("li");
                li.innerText = step;
                olInstructions.appendChild(li);
            }
            const img: HTMLImageElement = document.createElement("img");
            img.src = recipe.image;
            img.alt = recipe.name;

            div.appendChild(divWithInfo);
            div.appendChild(ulIngredients);
            div.appendChild(olInstructions);
            div.appendChild(img);

            recipesDiv.appendChild(div);
        }
    });
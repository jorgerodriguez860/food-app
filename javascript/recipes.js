

let cuisine = "";
let meal = "";
let query = "";
let suggestionsbox = document.getElementById("suggestionsbox");
let dishName = '';
let mealtype = '';
let cuisinetype = ''
let ingredientsList = ''
let diet = ''
let cal = ''
let dishImage = ''
let ingredients = ''
let mealPressed = ''

function cuisineTypeClick(typeCuisine) {
    // cuisine = typeCuisine;
    // console.log(cuisine);

    asian = document.getElementById('asian');
    american = document.getElementById('american');
    centraleurope = document.getElementById('centraleurope');
    caribbean = document.getElementById('caribbean');
    chinese = document.getElementById('chinese');
    french = document.getElementById('french');
    indian = document.getElementById('indian');
    japanese = document.getElementById('japanese');
    southeastasian = document.getElementById('southeastasian');
    italian = document.getElementById('italian');
    latin = document.getElementById('latin');
    mediterranean = document.getElementById('mediterranean');
    mexican = document.getElementById('mexican');
    middleeastern = document.getElementById('middleeastern');



    newCuisineString = typeCuisine.split(" ").join("")

    // console.log(typeCuisine)
    cuisinePressed = document.getElementById(newCuisineString);


    if(cuisine == '') {
        cuisinePressed.style.backgroundColor = "#dc3444";
        cuisinePressed.style.color = "white";
        cuisine = typeCuisine;
        console.log(cuisine)

    }

    else if(cuisine == typeCuisine) {
        cuisinePressed.style.backgroundColor = "white";
        cuisinePressed.style.color = "#dc3444";
        cuisine = '';
        console.log(cuisine)

    }

    else if(cuisine != '') {
        //reset breakfast button
        asian.style.backgroundColor = "white";
        asian.style.color = "#dc3444";

        //reset lunch button
        american.style.backgroundColor = "white";
        american.style.color = "#dc3444";

        //reset dinner button
        centraleurope.style.backgroundColor = "white";
        centraleurope.style.color = "#dc3444";

        //reset dinner button
        caribbean.style.backgroundColor = "white";
        caribbean.style.color = "#dc3444";

        //reset dinner button
        chinese.style.backgroundColor = "white";
        chinese.style.color = "#dc3444";

        //reset dinner button
        french.style.backgroundColor = "white";
        french.style.color = "#dc3444";

        //reset dinner button
        indian.style.backgroundColor = "white";
        indian.style.color = "#dc3444";

        //reset dinner button
        japanese.style.backgroundColor = "white";
        japanese.style.color = "#dc3444";

        //reset dinner button
        southeastasian.style.backgroundColor = "white";
        southeastasian.style.color = "#dc3444";

        //reset dinner button
        italian.style.backgroundColor = "white";
        italian.style.color = "#dc3444";

        //reset dinner button
        latin.style.backgroundColor = "white";
        latin.style.color = "#dc3444";

        //reset dinner button
        mediterranean.style.backgroundColor = "white";
        mediterranean.style.color = "#dc3444";

        //reset dinner button
        mexican.style.backgroundColor = "white";
        mexican.style.color = "#dc3444";

        //reset dinner button
        middleeastern.style.backgroundColor = "white";
        middleeastern.style.color = "#dc3444";

        //change mealpressed to appear pressed
        cuisinePressed.style.backgroundColor = "#dc3444";
        cuisinePressed.style.color = "white";
        cuisine = typeCuisine;
        console.log(cuisine)
    }


    
}

function mealTypeClick(typeMeal) {
     // get id for each button
     breakfastbutton = document.getElementById('breakfastbutton');
     lunchbutton = document.getElementById('lunchbutton');
     dinnerbutton = document.getElementById('dinnerbutton');
 
     //get id for button pressed
     mealPressed = document.getElementById(typeMeal + "button");
     
 
     //if no meal has been selected
     if(meal == '') {
         mealPressed.style.backgroundColor = "#dc3444";
         mealPressed.style.color = "white";
         meal = typeMeal;
     }
     //if button is already selected then reset
     else if(meal == typeMeal) {
         mealPressed.style.backgroundColor = "white";
         mealPressed.style.color = "#dc3444";
         meal = '';
     }
     //if a meal is selected but user wants to change. Reset button colors and appear pressed to new pressed button
     else if(meal != '') {
         //reset breakfast button
         breakfastbutton.style.backgroundColor = "white";
         breakfastbutton.style.color = "#dc3444";
 
         //reset lunch button
         lunchbutton.style.backgroundColor = "white";
         lunchbutton.style.color = "#dc3444";
 
         //reset dinner button
         dinnerbutton.style.backgroundColor = "white";
         dinnerbutton.style.color = "#dc3444";
 
         //change mealpressed to appear pressed
         mealPressed.style.backgroundColor = "#dc3444";
         mealPressed.style.color = "white";
         meal = typeMeal;
     }
    // meal = typeMeal;
    // console.log(meal)
}

// function queryType(typeQuery) {
    
//     query = typeQuery;
// }
 
function cook() {
    resetSuggestions();
    let query = document.getElementById('query').value;
    console.log(query);

    if(meal!='' && cuisine!='' && query!= null) {
            let callLink = (`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=6192121f&app_key=c91c5aec01ee24103ab88d0b7c1ce636&cuisineType=${cuisine}&mealType=${meal}&random=true`)
        // console.log(callLink)
        fetch(callLink)
        .then(response => {return response.json()})
        .then(foodData => {

            let results = foodData.hits
            console.log(results)

            for (let i =0; i < 5; i++) {
                            ingredients = ''
                            dishName = results[i].recipe.label
                            mealtype = results[i].recipe.mealType
                            cuisinetype = results[i].recipe.cuisineType
                            ingredientsList = results[i].recipe.ingredients
                            console.log(ingredientsList);
                            diet = results[i].recipe.dietLabels
                            cal = Math.floor(results[i].recipe.calories)
                            dishImage = results[i].recipe.image
                
                            // console.log(ingredientsList)
                            for (let j = 0; j < ingredientsList.length; j++) {
                                ingredients = ingredients + ' ' + ingredientsList[j].food + ', '
                                // missingIngredients = missingIngredients + ' ' + data[i].missedIngredients[j].originalName + ', '

                            }
                            // console.log(ingredients)

                            newCard = document.createElement('div');
                            newCard.innerHTML = `<div id="mealcards" class='card' style='width: 18rem;'>
                                <img class='card-img-top' src='${dishImage}' alt='Card image cap'>
                                    <div class='card-body'>
                                    <h5 class='card-title'>${dishName}</h5>
                                    <p class='card-text'><h6>Ingredients:</h6>${ingredients}</p>
                                    <p class='card-text'><h6>Diet Label(s):</h6>${diet}</p>
                                    <p class='card-text'><h6>Calories:</h6>${cal}</p>
                                </div>
                            </div>`
                            
                            // console.log(data[i].missedIngredients[0].name)
                            suggestionsbox.append(newCard)
                            
                        }
            
    })

}}

function resetSuggestions() {
    suggestionsbox.innerHTML = ''
}
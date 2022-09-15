chosenMeal = 'None';
currentIngredient = 0;
let suggestionsbox = document.getElementById('suggestionsbox');
ingredientsDict = {'eggs': 0, 
    'chicken': 0, 
    'tomato': 0,
    'bread': 0,
    'flour': 0,
    'bell pepper': 0
    };

// currentPantry = [];


// function mealTypeClick(meal) {
//     // get id for each button
//     // breakfastbutton = document.getElementById('breakfastbutton');
//     // lunchbutton = document.getElementById('lunchbutton');
//     // dinnerbutton = document.getElementById('dinnerbutton');

//     //get id for button pressed
//     mealPressed = document.getElementById(meal + "button");
//     console.log(chosenMeal);

//     //if no meal has been selected
//     if(chosenMeal == 'None') {
//         mealPressed.style.backgroundColor = "#dc3444";
//         mealPressed.style.color = "white";
//         chosenMeal = meal;
//     }
//     //if button is already selected then reset
//     else if(chosenMeal == meal) {
//         mealPressed.style.backgroundColor = "white";
//         mealPressed.style.color = "#dc3444";
//         chosenMeal = 'None';
//     }
//     //if a meal is selected but user wants to change. Reset button colors and appear pressed to new pressed button
//     else if(chosenMeal != 'None') {
//         //reset breakfast button
//         breakfastbutton.style.backgroundColor = "white";
//         breakfastbutton.style.color = "#dc3444";

//         //reset lunch button
//         lunchbutton.style.backgroundColor = "white";
//         lunchbutton.style.color = "#dc3444";

//         //reset dinner button
//         dinnerbutton.style.backgroundColor = "white";
//         dinnerbutton.style.color = "#dc3444";

//         //change mealpressed to appear pressed
//         mealPressed.style.backgroundColor = "#dc3444";
//         mealPressed.style.color = "white";
//         chosenMeal = meal;
//     }
    



// }

function ingredientEnterClick() {
    const ingredientsinput = document.getElementById('ingredientsinput').value;
    console.log(ingredientsinput);

    //check if in ingredientsDict, not yet selected and a mealtype has been selected
    if(currentIngredient < 5 && ingredientsDict[ingredientsinput]!=null && ingredientsDict[ingredientsinput] == 0) {
        console.log('found');
        ingredientListLocation = document.getElementById('ingredient' + currentIngredient);
        ingredientListLocation.innerHTML = "&#127869; " + ingredientsinput
        
        ingredientsDict[ingredientsinput] += 1;
        currentIngredient++;
    }
}

function deleteIngredient(index) {
    ingredientList0 = document.getElementById("ingredient0");
    ingredientList1 = document.getElementById("ingredient1");
    ingredientList2 = document.getElementById("ingredient2");
    ingredientList3 = document.getElementById("ingredient3");
    ingredientList4 = document.getElementById("ingredient4");
    
    clickedIndex = document.getElementById("ingredient" + index).innerText
    clickedText = clickedIndex.slice(3)
    ingredientsDict[clickedText] = 0
    console.log(ingredientsDict)

    

    for(i = index;i<currentIngredient;i++) {
        if(i==0) {
           ingredientList0.innerText = ingredientList1.innerText;
        }
        else if(i==1) {
            ingredientList1.innerText = ingredientList2.innerText;
        }
        else if(i==2) {
            ingredientList2.innerText = ingredientList3.innerText;
        }
        else if(i==3) {
            ingredientList3.innerText = ingredientList4.innerText;
        }
        else if(i==4) {
            ingredientList4.innerHTML = "&#127869; ";
            console.log(ingredientList4.innerHTML)
        }
        

    }
    currentIngredient --;

}



function searchWhatCanBeMade() {
    resetPantry()
    buildString = ''
    // for(i=0;i<=currentIngredient;i++) {
    //     buildString = 
    // }

    Object.entries(ingredientsDict).forEach(function([key, value]) {
        console.log(`${key} ${value}`);
        if(value == 1) {
            buildString += key + ",+"
        }
     });

    
    buildString = buildString.slice(0,-2)
     console.log(buildString)

    buildLinkString = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + buildString + '&number=5&apiKey=62c793b95cc841b1a1d5e64a9cf775b2';
    console.log(buildLinkString)
    fetch(buildLinkString)
    .then(response => {return response.json()})
    .then(data => {
        console.log('data')
        console.log(data)

        
        // newCard.setAttribute('id', 'cards');

        for(i = 0; i< 5; i++) {
            newCard = document.createElement('div');
            missingIngredients = " "
            for(j = 0; j<data[i].missedIngredients.length;j++) {
                missingIngredients = missingIngredients + ' ' + data[i].missedIngredients[j].originalName + ', '
            }
            


            newCard.innerHTML = `<div class='card' style='width: 18rem;'>
                <img class='card-img-top' src='${data[i].image}' alt='Card image cap'>
                <div class='card-body'>
                    <h5 class='card-title'>${data[i].title}</h5>
                    <p class='card-text'><h6>Missing Ingredients:</h6> ${missingIngredients}</p>
                    <a href='#' class='btn btn-primary'>${data[i].likes} &#x1F44D;</a>
                </div>
            </div>`
            
            // console.log(data[i].missedIngredients[0].name)
            suggestionsbox.append(newCard)
        }

        console.log(missingIngredients)
    

    })
}

function resetPantry() {
    suggestionsbox.innerHTML = ''
}



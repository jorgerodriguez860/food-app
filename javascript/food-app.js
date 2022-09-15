chosenMeal = 'None';
currentIngredient = 0;

ingredientsDict = {'eggs': 0, 
    'chicken': 0, 
    'tomato': 0,
    'bread': 0,
    'flour': 0,
    'bell pepper': 0
    };

// currentPantry = [];


function mealTypeClick(meal) {
    // get id for each button
    breakfastbutton = document.getElementById('breakfastbutton');
    lunchbutton = document.getElementById('lunchbutton');
    dinnerbutton = document.getElementById('dinnerbutton');

    //get id for button pressed
    mealPressed = document.getElementById(meal + "button");
    console.log(chosenMeal);

    //if no meal has been selected
    if(chosenMeal == 'None') {
        mealPressed.style.backgroundColor = "#dc3444";
        mealPressed.style.color = "white";
        chosenMeal = meal;
    }
    //if button is already selected then reset
    else if(chosenMeal == meal) {
        mealPressed.style.backgroundColor = "white";
        mealPressed.style.color = "#dc3444";
        chosenMeal = 'None';
    }
    //if a meal is selected but user wants to change. Reset button colors and appear pressed to new pressed button
    else if(chosenMeal != 'None') {
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
        chosenMeal = meal;
    }
    



}

function ingredientEnterClick() {
    const ingredientsinput = document.getElementById('ingredientsinput').value;
    console.log(ingredientsinput);

    //check if in ingredientsDict, not yet selected and a mealtype has been selected
    if(currentIngredient < 5 && chosenMeal!= 'None' && ingredientsDict[ingredientsinput]!=null && ingredientsDict[ingredientsinput] == 0) {
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
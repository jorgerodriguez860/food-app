
let cuisine = "";

let meal = "";
let query = "";
let dishName = '';
let mealtype = '';
let cuisinetype = ''
let ingredientsList = ''
let diet = ''
let cal = ''
let dishImage = ''
let ingredients = ''
let mealPressed = ''
let suggestionsbox = document.getElementById("suggestionsbox");
let cuisineLinkString = '';


function cuisineTypeClick(typeCuisine) {        //this function is for the cuisine selection section of the page
    // cuisine = typeCuisine;
    // console.log(cuisine);

    // retrieving document IDs
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
    southamerican = document.getElementById('southamerican');
    mediterranean = document.getElementById('mediterranean');
    mexican = document.getElementById('mexican');
    middleeastern = document.getElementById('middleeastern');

    newCuisineString = typeCuisine.split(' ').join('')
    cuisineLinkString = typeCuisine.split(' ').join('%20');
    console.log(newCuisineString)  

    // console.log(typeCuisine)
    cuisinePressed = document.getElementById(newCuisineString);

    //these conditions will make buttons stay active when pressed and will return to initial state
    if(cuisine == '') {                                
        cuisinePressed.style.backgroundColor = "#dc3444";           
        cuisinePressed.style.color = "white";
        cuisine = typeCuisine;
        console.log(cuisine)
    } else if(cuisine == typeCuisine) {
        cuisinePressed.style.backgroundColor = "white";
        cuisinePressed.style.color = "#dc3444";
        cuisine = '';
        console.log(cuisine)
    } else if(cuisine != '') {                                  //button background resets to white if empty/not active
        //reset asian button
        asian.style.backgroundColor = "white";
        asian.style.color = "#dc3444";

        //reset american button
        american.style.backgroundColor = "white";
        american.style.color = "#dc3444";

        //reset central europe button
        centraleurope.style.backgroundColor = "white";
        centraleurope.style.color = "#dc3444";

        //reset caribbean button
        caribbean.style.backgroundColor = "white";
        caribbean.style.color = "#dc3444";

        //reset chinese button
        chinese.style.backgroundColor = "white";
        chinese.style.color = "#dc3444";

        //reset french button
        french.style.backgroundColor = "white";
        french.style.color = "#dc3444";

        //reset indian button
        indian.style.backgroundColor = "white";
        indian.style.color = "#dc3444";

        //reset japanese button
        japanese.style.backgroundColor = "white";
        japanese.style.color = "#dc3444";

        //reset south east asian button
        southeastasian.style.backgroundColor = "white";
        southeastasian.style.color = "#dc3444";

        //reset italian button
        italian.style.backgroundColor = "white";
        italian.style.color = "#dc3444";

        //reset south american button
        southamerican.style.backgroundColor = "white";
        southamerican.style.color = "#dc3444";

        //reset mediterranean button
        mediterranean.style.backgroundColor = "white";
        mediterranean.style.color = "#dc3444";

        //reset mexican button
        mexican.style.backgroundColor = "white";
        mexican.style.color = "#dc3444";

        //reset middle eastern button
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
     //get id for each button
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
 
function cook() {
    resetSuggestions();
    let query = document.getElementById('query').value;
    console.log(query);

    //requires user to have both buttons active and inputted text to text box
    if(meal!='' && cuisine!='' && query!= null) {
        let callLink = (`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=6192121f&app_key=c91c5aec01ee24103ab88d0b7c1ce636&cuisineType=${cuisineLinkString}&mealType=${meal}&random=true`)
        fetch(callLink)
        .then(response => {return response.json()})
        .then(foodData => {

            console.log(foodData)
            let results = foodData.hits
            console.log(results)


            //loops through the meal until the 5th meal
            for (let i =0; i < 5; i++) {
                            ingredients = ''
                            dishName = results[i].recipe.label              //setting alias to each variables that will be needed
                            mealtype = results[i].recipe.mealType
                            cuisinetype = results[i].recipe.cuisineType
                            console.log(ingredientsList);
                            diet = results[i].recipe.dietLabels
                            cal = Math.floor(results[i].recipe.calories)
                            dishImage = results[i].recipe.image
                            ingredientsList = results[i].recipe.ingredients
                            // console.log(ingredientsList)                     //test log ingredients list

                            //loops through ingredients list(array) and joins into a string
                            for (let j = 0; j < ingredientsList.length; j++) {
                                ingredients = ingredients + ' ' + ingredientsList[j].food + ', '
                            }

                            //creating a new div element for each meal card
                            newCard = document.createElement('div');        
                            //setting innerHTML
                            newCard.innerHTML = `                                                   
                                                <div id="mealcards" class='card''>
                                                <img class='card-img-top' src='${dishImage}' alt='Card image cap'>
                                                <div class='card-body'>
                                                <h5 class='card-title'>${dishName}</h5>
                                                <p class='card-text'><h6>Ingredients:</h6>${ingredients}</p>
                                                <p class='card-text'><h6>Diet Label(s):</h6>${diet}</p>
                                                <p class='card-text'><h6>Calories:</h6>${cal}</p>
                                                </div>
                                                </div>`
                                                // <button id="moreinfo">Show more</button>

                            suggestionsbox.append(newCard)
                            
                        }
            
        })

    }
    else {
        $( document.getElementById('submitButton') ).effect( "shake", "swing");      //if invalid input shake the enter button   
        $( document.getElementById('optionstext') ).effect( "shake", "swing");      //if invalid input shake the enter button   

    }

}


function resetSuggestions() {       //resets and removes meal cards to show new results
    suggestionsbox.innerHTML = ''
}

// const open = document.getElementById('moreinfo')
// const close = document.getElementById('close')
// const modal_container = document.getElementById('modalcontainer')

// open.addEventListener('click', () => {
//     modal_container.classList.add('show');
// });

// close.addEventListener('click', () => {
//     modal_container.classList.remove('show');
// });
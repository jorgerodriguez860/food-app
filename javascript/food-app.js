// List of 1,000 most frequently used ingredients from Spoonacular API
let ingredientsDict = {'eggs': 0, 
'5 spice powder': 0,'acorn squash': 0,'adobo sauce': 0,'agave nectar': 0,'ahi tuna': 0,'alfredo pasta sauce': 0,'almond extract': 0,'almond flour': 0,'almond milk': 0,'almonds': 0,'amaretto': 0,'ancho chiles': 0,'anchovies': 0,'andouille sausage': 0,'angel food cake mix': 0,'angel hair pasta': 0,'angostura bitters': 0,'apple': 0,'apple butter spread': 0,'apple cider': 0,'apple juice': 0,'apple pie spice': 0,'apricot preserves': 0,'apricots': 0,'arborio rice': 0,'arrowroot powder': 0,'artichoke heart quarters': 0,'artichokes': 0,'arugula': 0,'asafoetida': 0,'asafoetida powder': 0,'asiago cheese': 0,'asian pear': 0,'asparagus spears': 0,'avocado': 0,'avocado oil': 0,'baby bell peppers': 0,'baby bok choy': 0,'baby carrots': 0,'baby corn': 0,'baby spinach leaves': 0,'baby-back ribs': 0,'baby-back ribs': 0,'bacon': 0,'bacon fat': 0,'baguette': 0,'baking bar': 0,'baking powder': 0,'baking soda': 0,'balsamic glaze': 0,'balsamic vinegar': 0,'bamboo shoots': 0,'banana': 0,'basmati rice': 0,'bay leaves': 0,'bbq sauce': 0,'beans': 0,'beef': 0,'beef brisket': 0,'beef broth': 0,'beef chuck roast': 0,'beef stock': 0,'beef tenderloin': 0,'beer': 0,'beer': 0,'beets': 0,'bell pepper': 0,'berries': 0,'biscuit mix': 0,'biscuits': 0,'bittersweet chocolate': 0,'black bean sauce': 0,'black beans': 0,'black olives': 0,'black pepper': 0,'black sesame seeds': 0,'blackberries': 0,'blanched almonds': 0,'blood orange': 0,'blue cheese': 0,'blueberries': 0,'bok choy': 0,'boneless skinless chicken breast': 0,'bourbon': 0,'brandy': 0,'bread': 0,'bread flour': 0,'breakfast links': 0,'brie': 0,'broccoli': 0,'broccoli florets': 0,'brown rice': 0,'brown rice flour': 0,'brown sugar': 0,'brownie mix': 0,'brussel sprouts': 0,'bulgur': 0,'butter': 0,'butterhead lettuce': 0,'buttermilk': 0,'butternut squash': 0,'butterscotch chips': 0,'cabbage': 0,'caesar dressing': 0,'cajun seasoning': 0,'cake flour': 0,'candy canes': 0,'candy coating': 0,'candy melts': 0,'canned black beans': 0,'canned diced tomatoes': 0,'canned garbanzo beans': 0,'canned green chiles': 0,'canned kidney beans': 0,'canned mushrooms': 0,'canned pinto beans': 0,'canned red kidney beans': 0,'canned tomatoes': 0,'canned tuna': 0,'canned white beans': 0,'canned white cannellini beans': 0,'cannellini beans': 0,'cantaloupe': 0,'capers': 0,'caramel sauce': 0,
'caramels': 0,'caraway seed': 0,'cardamom': 0,'cardamom pods': 0,'carp': 0,'carrots': 0,'cat fish filets': 0,'cauliflower': 0,'cauliflower florets': 0,'cauliflower rice': 0,'celery': 0,'celery ribs': 0,'celery root': 0,'celery salt': 0,'celery seed': 0,'cereal': 0,'champagne': 0,'chana dal': 0,'cheddar': 0,'cheese': 0,'cheese curds': 0,'cheese dip': 0,'cheese soup': 0,'cheese tortellini': 0,'cherry': 0,'cherry pie filling': 0,'cherry tomatoes': 0,'chestnuts': 0,'chia seeds': 0,'chicken base': 0,'chicken bouillon': 0,'chicken bouillon granules': 0,'chicken breasts': 0,'chicken broth': 0,'chicken drumsticks': 0,'chicken legs': 0,'chicken pieces': 0,'chicken sausage': 0,'chicken stock': 0,'chicken tenders': 0,'chicken thighs': 0,'chicken wings': 0,'chickpea': 0,'chile garlic sauce': 0,'chili paste': 0,'chili peppers': 0,'chili powder': 0,'chili sauce': 0,'chipotle chiles in adobo': 0,'chipotle chilies': 0,'chipotle peppers in adobo': 0,'chive & onion cream cheese spread': 0,'chocolate': 0,'chocolate chip cookies': 0,'chocolate chunks': 0,'chocolate ice cream': 0,'chocolate milk': 0,'chocolate sandwich cookies': 0,'chocolate syrup': 0,'chocolate wafer cookies': 0,'chorizo sausage': 0,'cider vinegar': 0,'cilantro': 0,'cinnamon roll': 0,'cinnamon stick': 0,'cinnamon sugar': 0,'cinnamon swirl bread': 0,'clam juice': 0,'clams': 0,'clarified butter': 0,'clove': 0,'coarse salt': 0,'coarsely ground pepper': 0,'cocoa nibs': 0,'cocoa powder': 0,'coconut': 0,'coconut aminos': 0,'coconut butter': 0,'coconut cream': 0,'coconut extract': 0,'coconut flour': 0,'coconut milk': 0,'coconut oil': 0,'coconut water': 0,'cod': 0,'coffee': 0,'cognac': 0,'cola': 0,'colby jack': 0,'collard greens': 0,'condensed cream of celery soup': 0,'condensed cream of mushroom soup': 0,
"confectioner's swerve": 0,'cooked bacon': 0,'cooked brown rice': 0,'cooked chicken breast': 0,'cooked ham': 0,'cooked long grain rice': 0,'cooked pasta': 0,'cooked polenta': 0,'cooked quinoa': 0,'cooked wild rice': 0,'cookies': 0,'coriander': 0,'corn': 0,'corn bread mix': 0,'corn chips': 0,'corn flakes cereal': 0,'corn flour': 0,'corn kernels': 0,'corn oil': 0,'corn tortillas': 0,'cornbread': 0,'corned beef': 0,'cornish hens': 0,'cornmeal': 0,'cornstarch': 0,
'cotija cheese': 0,'cottage cheese': 0,'country bread': 0,'courgettes': 0,'couscous': 0,'cow pea': 0,'crabmeat': 0,'cracked pepper': 0,'cranberries': 0,'cranberry juice': 0,'cream': 0,'cream cheese': 0,'cream cheese block': 0,'cream of chicken soup': 0,'cream of tartar': 0,'creamed corn': 0,'creamy peanut butter': 0,'creme fraiche': 0,'cremini mushrooms': 0,'creole seasoning': 0,'crisp rice cereal': 0,'croutons': 0,'crystallized ginger': 0,'cucumber': 0,'cumin seeds': 0,'cup cake': 0,'currants': 0,'curry leaves': 0,'dairy free milk': 0,'dark brown sugar': 0,'dark chocolate': 0,'dark chocolate candy bars': 0,'dark chocolate chips': 0,'dark sesame oil': 0,'dates': 0,'deep dish pie crust': 0,'deli ham': 0,'deli turkey': 0,'dessert oats': 0,'dessert wine': 0,'diced ham': 0,'diet pop': 0,'dijon mustard': 0,'dill': 0,'dill pickles': 0,'hot dog': 0,'double cream': 0,'dried apricots': 0,'dried basil': 0,'dried cherries': 0,'dried chorizo': 0,'dried cranberries': 0,'dried dill': 0,'dried onion': 0,'dried porcini mushrooms': 0,'dried rubbed sage': 0,'dried thyme': 0,'dried tomatoes': 0,'dry bread crumbs': 0,'dry milk': 0,'dry mustard': 0,'dry red wine': 0,'dry roasted peanuts': 0,'duck fat': 0,'dutch process cocoa powder': 0,'edamame': 0,'egg substitute': 0,'egg vermicelli': 0,'egg whites': 0,'egg yolk': 0,'eggnog': 0,'eggplant': 0,'elbow macaroni': 0,'enchilada sauce': 0,'english cucumber': 0,'english muffin': 0,'erythritol': 0,'escarole': 0,'espresso': 0,'evaporated milk': 0,'extra firm tofu': 0,'extra virgin olive oil': 0,'farfalle': 0,'farro': 0,'fat free mayo': 0,'fat-free less-sodium chicken broth': 0,'fennel': 0,'fennel seeds': 0,'fenugreek leaf': 0,'fenugreek seeds': 0,'feta cheese': 0,'fettuccine': 0,'fire roasted tomatoes': 0,'fish': 0,'fish sauce': 0,'fish stock': 0,'flank steak': 0,'flax seeds': 0,'fleur de sel': 0,'flour': 0,'flour tortillas': 0,'fontina cheese': 0,'food dye': 0,
"frank's redhot sauce": 0,'free range eggs': 0,'french bread': 0,'fresh basil': 0,'fresh bean sprouts': 0,'fresh chives': 0,'fresh corn': 0,'fresh corn kernels': 0,'fresh figs': 0,'fresh fruit': 0,'fresh herbs': 0,'fresh mint': 0,'fresh mozzarella': 0,'fresh rosemary': 0,'fresh thyme leaves': 0,'fried onions': 0,'frosting': 0,'froyo bars': 0,'frozen corn': 0,'frozen spinach': 0,'fudge': 0,'fudge topping': 0,
'fun size almond joy bar': 0,'garam masala': 0,'garbanzo bean flour': 0,'garlic': 0,'garlic paste': 0,'garlic powder': 0,'garlic powder': 0,'garlic salt': 0,'gelatin': 0,'gf chocolate cake mix': 0,'gin': 0,'ginger': 0,'ginger ale': 0,'ginger paste': 0,'ginger-garlic paste': 0,'gingersnap cookies': 0,'gnocchi': 0,'goat cheese': 0,'golden raisins': 0,'gorgonzola': 0,'gouda cheese': 0,'graham cracker crumbs': 0,'graham cracker pie crust': 0,'graham crackers': 0,'grain blend': 0,'grand marnier': 0,'granny smith apples': 0,'granola': 0,'granulated garlic': 0,'grape tomatoes': 0,'grapefruit': 0,'grapeseed oil': 0,'gravy': 0,'great northern beans': 0,'greek yogurt': 0,'green beans': 0,'green bell pepper': 0,'green chili pepper': 0,'green food coloring': 0,'green grapes': 0,'green olives': 0,'green onions': 0,'greens': 0,'grill cheese': 0,'grill seasoning': 0,'ground allspice': 0,'ground ancho chili': 0,'ground beef': 0,'ground chicken': 0,'ground chipotle chile pepper': 0,'ground cinnamon': 0,'ground cinnamon': 0,'ground cloves': 0,'ground coriander seeds': 0,'ground cumin': 0,'ground flaxseed': 0,'ground ginger': 0,'ground lamb': 0,'ground mace': 0,'ground nutmeg': 0,'ground pork': 0,'ground pork sausage': 0,'ground veal': 0,'gruyere': 0,'guacamole': 0,'half n half': 0,'halibut fillet': 0,'ham': 0,'hamburger buns': 0,'hard cooked eggs': 0,'harissa': 0,'hash brown potatoes': 0,'hazelnuts': 0,'healthy request cream of celery soup': 0,'hemp seeds': 0,'herbes de provence': 0,'herbs': 0,
"hershey's kisses brand milk chocolates": 0,'hoisin sauce': 0,'honey mustard': 0,'horseradish': 0,'hot sauce': 0,'hummus': 0,'ice': 0,'ice cream': 0,'instant chocolate pudding mix': 0,'instant coffee powder': 0,'instant espresso powder': 0,'instant lemon pudding mix': 0,'instant yeast': 0,'irish cream': 0,'italian bread': 0,'italian cheese blend': 0,'italian sausages': 0,'italian seasoning': 0,'jaggery': 0,'jalapeno': 0,'jasmine rice': 0,'jelly': 0,'jicama': 0,'jimmies': 0,'juice': 0,'jumbo shell pasta': 0,'kaffir lime leaves': 0,'kahlua': 0,'kalamata olives': 0,'kale': 0,'ketchup': 0,'kitchen bouquet': 0,'kiwis': 0,'kosher salt': 0,'ladyfingers': 0,'lamb': 0,'lasagna noodles': 0,'lb cake': 0,'lean ground beef': 0,'lean ground turkey': 0,'lean pork tenderloin': 0,'leeks': 0,'leg of lamb': 0,'lemon': 0,'lemon curd': 0,'lemon extract': 0,'lemon juice': 0,'lemon peel': 0,'lemon pepper': 0,'lemon wedges': 0,'lemongrass': 0,'lettuce': 0,'lettuce leaves': 0,'light butter': 0,'light coconut milk': 0,'light corn syrup': 0,'light cream cheese': 0,'light mayonnaise': 0,'light olive oil': 0,
'light soy sauce': 0,'lime': 0,'lime juice': 0,'lime wedges': 0,'lime zest': 0,'linguine': 0,'liquid smoke': 0,'liquid stevia': 0,'liquor': 0,'live lobster': 0,'long-grain rice': 0,'low fat buttermilk': 0,'low fat milk': 0,'low fat milk': 0,'low fat plain yogurt': 0,'low fat ricotta cheese': 0,'low fat sour cream': 0,'low sodium chicken broth': 0,'low sodium soy sauce': 0,'low-sodium chicken stock': 0,'lower sodium beef broth': 0,'lump crab': 0,'m&m candies': 0,'macadamia nuts': 0,'macaroni and cheese mix': 0,'madras curry powder': 0,'malt drink mix': 0,'mandarin orange sections': 0,'mandarin oranges': 0,'mango': 0,'maple syrup': 0,'maraschino cherries': 0,'margarine': 0,'marinara sauce': 0,'marjoram': 0,'marsala wine': 0,'marshmallow fluff': 0,'marshmallows': 0,'masa harina': 0,'mascarpone': 0,'mat beans': 0,'matcha tea': 0,'mayonnaise': 0,'meat': 0,'meat': 0,'meatballs': 0,'medjool dates': 0,'mexican cream': 0,'meyer lemon juice': 0,'milk': 0,'milk chocolate chips': 0,'mint chutney': 0,'minute rice': 0,'miracle whip': 0,'mirin': 0,'miso': 0,'molasses': 0,'monterey jack cheese': 0,'mushroom': 0,'mussels': 0,'mustard': 0,'mustard seeds': 0,'napa cabbage': 0,'navel oranges': 0,'nectarine': 0,'new potatoes': 0,'non-fat greek yogurt': 0,'nonfat cool whip': 0,'nonfat milk': 0,'nori': 0,'nut butter': 0,'nut meal': 0,'nutella': 0,'nutritional yeast': 0,'oat flour': 0,'oats': 0,'oil': 0,'oil packed sun dried tomatoes': 0,'okra': 0,'old bay seasoning': 0,'olive oil': 0,'olives': 0,'onion': 0,'onion powder': 0,'onion soup mix': 0,'orange': 0,'orange bell pepper': 0,'orange juice': 0,'orange juice concentrate': 0,'orange liqueur': 0,'orange marmalade': 0,'orange oil': 0,'orange zest': 0,'oregano': 0,'oreo cookies': 0,'orzo': 0,'oyster sauce': 0,'oysters': 0,'palm sugar': 0,'pancetta': 0,'paneer': 0,'panko': 0,'papaya': 0,'paprika': 0,'parmigiano reggiano': 0,'parsley': 0,'parsley flakes': 0,'parsnip': 0,'part-skim mozzarella cheese': 0,'pasta': 0,'pasta salad mix': 0,'pasta sauce': 0,'pastry flour': 0,'peach': 0,'peanut butter': 0,'peanut butter chips': 0,'peanut butter cups': 0,'peanut oil': 0,'peanuts': 0,'pear liqueur': 0,'pearl barley': 0,'pearl onions': 0,'peas': 0,'pecan': 0,'pecan pieces': 0,'pecorino': 0,'penne': 0,'peperoncino': 0,'pepper jack cheese': 0,'peppercorns': 0,'peppermint baking chips': 0,'peppermint extract': 0,'pepperoni': 0,'peppers': 0,'pesto': 0,'pickle relish': 0,'pickles': 0,'pico de gallo': 0,'pie crust': 0,'pimento stuffed olives': 0,
'pimientos': 0,
'pine nuts': 0,'pineapple': 0,'pineapple chunks': 0,'pineapple in juice': 0,'pineapple juice': 0,'pink himalayan salt': 0,'pinto beans': 0,'pistachios': 0,'pita': 0,'pizza crust': 0,'pizza mix': 0,'plain greek yogurt': 0,'plain nonfat yogurt': 0,'plain yogurt': 0,'plantain': 0,'plum': 0,'plum tomatoes': 0,'poblano peppers': 0,'polenta': 0,'polish sausage': 0,'pomegranate juice': 0,'pomegranate molasses': 0,'pomegranate seeds': 0,'popcorn': 0,'poppy seeds': 0,'pork': 0,'Pork & Beans': 0,'pork belly': 0,'pork butt': 0,'pork chops': 0,'pork links': 0,'pork loin chops': 0,'pork loin roast': 0,'pork roast': 0,'pork shoulder': 0,'pork tenderloin': 0,'port': 0,'portabella mushrooms': 0,'pot roast': 0,'potato chips': 0,'potato starch': 0,'potatoes': 0,'poultry seasoning': 0,'powdered sugar': 0,'pretzel sandwiches': 0,'processed american cheese': 0,'prosciutto': 0,'provolone cheese': 0,'prunes': 0,'puff pastry': 0,'pumpkin': 0,'pumpkin pie filling': 0,'pumpkin pie spice': 0,'pumpkin puree': 0,'pumpkin seeds': 0,'queso fresco': 0,'quick cooking oats': 0,'quinoa': 0,'quinoa flour': 0,'radicchio': 0,'radishes': 0,'raisins': 0,'rajma masala': 0,'ramen noodles': 0,'ranch dressing': 0,'ranch dressing mix': 0,'raspberries': 0,'raspberry jam': 0,'raw cashews': 0,'raw shrimp': 0,'ready-to-serve Asian fried rice': 0,'real bacon recipe pieces': 0,'red apples': 0,'red bell peppers': 0,'red cabbage': 0,'red chilli': 0,'red delicious apples': 0,'red food coloring': 0,'red grapefruit juice': 0,'red grapes': 0,'red kidney beans': 0,'red lentils': 0,'red onion': 0,'red pepper flakes': 0,'red pepper powder': 0,'red potatoes': 0,'red velvet cookie': 0,'red wine': 0,'red wine vinegar': 0,'reduced fat shredded cheddar cheese': 0,'refried beans': 0,'refrigerated crescent rolls': 0,'refrigerated pizza dough': 0,'refrigerated sugar cookie dough': 0,'rhubarb': 0,'rib tips': 0,'rice': 0,'rice flour': 0,'rice krispies cereal': 0,'rice milk': 0,'rice noodles': 0,'rice paper': 0,'rice syrup': 0,'rice vinegar': 0,'rice wine': 0,'ricotta salata': 0,'ritz crackers': 0,'roast beef': 0,'roasted chicken': 0,'roasted nuts': 0,'roasted peanuts': 0,'roasted red peppers': 0,'roma tomatoes': 0,'romaine lettuce': 0,'root vegetables': 0,'rosemary': 0,'rotini pasta': 0,'rotisserie chicken': 0,'round steak': 0,'rub': 0,'rum extract': 0,'runny honey': 0,'russet potatoes': 0,'rutabaga': 0,'rye bread': 0,'rye meal': 0,'saffron threads': 0,'sage': 0,'sage leaves': 0,'salad dressing': 0,'salami': 0,
'salmon fillet': 0,'salsa': 0,'salsa verde': 0,'salt': 0,'salt and pepper': 0,'salted butter': 0,'saltine crackers': 0,'sandwich bun': 0,'sauerkraut': 0,'sausage': 0,'sausage links': 0,'scotch bonnet chili': 0,'sea salt': 0,'sea scallops': 0,'seasoned bread crumbs': 0,'seasoned rice vinegar': 0,'seasoned salt': 0,'seasoning': 0,'seasoning blend': 0,'seeds': 0,'self-rising flour': 0,'semi sweet chocolate chips': 0,'serrano chile': 0,'sesame oil': 0,'sesame seed hamburger buns': 0,'sesame seeds': 0,'shallot': 0,'sharp cheddar cheese': 0,'sheeps milk cheese': 0,'shells': 0,'sherry': 0,'sherry': 0,'sherry vinegar': 0,'shiitake mushroom caps': 0,'short grain rice': 0,'short pasta': 0,'short ribs': 0,'shortbread cookies': 0,'shortcrust pastry': 0,'shortening': 0,'shredded cheddar cheese': 0,'shredded cheese': 0,'shredded chicken': 0,'shredded coconut': 0,'shredded mexican cheese blend': 0,'shredded mexican cheese blend': 0,'shredded mozzarella': 0,'silken tofu': 0,'sirloin steak': 0,'skim milk ricotta': 0,'skim vanilla greek yogurt': 0,'skin-on bone-in chicken leg quarters': 0,'skinless boneless chicken breast halves': 0,'skinless boneless chicken thighs': 0,'skinned black gram': 0,
'slaw dressing': 0,'slaw mix': 0,'slivered almonds': 0,'smoked paprika': 0,'smoked salmon': 0,'smoked sausage': 0,'smooth peanut butter': 0,'snapper fillets': 0,'snow peas': 0,'soda water': 0,'sour cream': 0,'sourdough bowl': 0,'sourdough bread': 0,'soy milk': 0,'soy protein powder': 0,'soy sauce': 0,'spaghetti': 0,'spaghetti squash': 0,'sparkling wine': 0,'spelt flour': 0,'spicy brown mustard': 0,'spinach': 0,'sprite': 0,'sprouts': 0,'squash': 0,'sriracha sauce': 0,'steaks': 0,'steel cut oats': 0,'stevia': 0,'stew meat': 0,'stew vegetables': 0,'stock': 0,'store-bought phyllo': 0,'stout': 0,'strawberries': 0,'strawberry jam': 0,'strawberry jello': 0,'stuffing': 0,'stuffing mix': 0,'sub rolls': 0,'sugar': 0,'sugar snap peas': 0,'sugar syrup': 0,'sukrin sweetener': 0,'summer savory': 0,'summer squash': 0,'sunflower oil': 0,'sunflower seeds': 0,'sweet chilli sauce': 0,'sweet onion': 0,'sweet paprika': 0,'sweet pickle juice': 0,'sweet pickle relish': 0,'sweet potato': 0,'sweet tea': 0,'sweetened coconut': 0,'sweetened condensed milk': 0,'sweetened shredded coconut': 0,'swiss chard': 0,'swiss cheese': 0,'taco seasoning mix': 0,'taco shells': 0,'tahini': 0,'tamari': 0,'tapioca flour': 0,'tarragon': 0,'tart apple': 0,'tea bags': 0,'tequila': 0,'teriyaki sauce': 0,'thai basil': 0,'thai chiles': 0,'thai red curry paste': 0,'thick-cut bacon': 0,'tilapia fillets': 0,'toast': 0,'toffee bits': 0,'tofu': 0,'tomatillos': 0,'tomato juice': 0,'tomato paste': 0,'tomato puree': 0,'tomato sauce': 0,'tomato soup': 0,'tomatoes': 0,'top blade steak': 0,'top round steak': 0,'Top Sirloin': 0,'tortilla': 0,'tortilla chips': 0,'triple sec': 0,'truffle oil': 0,'tuna': 0,'turbinado sugar': 0,'turkey': 0,'turkey breast': 0,'turkey kielbasa': 0,'turmeric': 0,'turnips': 0,'unbleached flour': 0,'unsalted butter': 0,'unsmoked back bacon': 0,'unsweetened applesauce': 0,'unsweetened coconut milk': 0,'unsweetened shredded coconut': 0,'vanilla bean': 0,'vanilla bean paste': 0,'vanilla essence': 0,'vanilla extract': 0,'vanilla frosting': 0,'vanilla instant pudding mix': 0,'vanilla protein powder': 0,'vanilla wafers': 0,'vanilla yogurt': 0,'vegan cheese': 0,'vegan chocolate chips': 0,'vegan margarine': 0,'vegetable broth': 0,'vegetable oil': 0,'vegetarian bacon': 0,'vermouth': 0,'vinaigrette': 0,'vinegar': 0,'vodka': 0,'walnuts': 0,'water': 0,'water chestnuts': 0,'water-packed tuna': 0,'watercress': 0,'watermelon chunks': 0,'wheat bran': 0,
'wheat germ': 0,
'whipped cream': 0,'whipped topping': 0,'whipping cream': 0,'whiskey': 0,'white balsamic vinegar': 0,'white bread': 0,'white cake mix': 0,'white cheddar': 0,'white chocolate': 0,'white chocolate chips': 0,'white onion': 0,'white pepper': 0,'white whole wheat flour': 0,'white wine': 0,'white wine vinegar': 0,'whole allspice berries': 0,'whole chicken': 0,'whole coriander seeds': 0,'whole cranberry sauce': 0,'whole kernel corn': 0,'whole star anise': 0,'whole wheat bread': 0,'whole wheat flour': 0,'whole wheat tortillas': 0,'whole-grain mustard': 0,'wine': 0,'wine vinegar': 0,'winter squash': 0,'won ton wraps': 0,'worcestershire sauce': 0,'wraps': 0,'xanthan gum': 0,'yeast': 0,'yellow bell pepper': 0,'yellow cake mix': 0,'yellow onion': 0,'yogurt': 0,'yukon gold potato': 0
};

//global variables
let chosenMeal = 'None';
let currentIngredient = 0;
let suggestionsbox = document.getElementById('suggestionsbox');
let prevString = "None"
let buildString = '';

//onclick function that adds ingredient to current pantry list
function ingredientEnterClick() {
    
    const ingredientsinput = document.getElementById('ingredientsinput').value;     //get value that was entered by user

    //check if an option inside of ingredientsDict, not yet selected and no more than 5 ingredients are on the list
    if(currentIngredient < 5 && ingredientsDict[ingredientsinput]!=null && ingredientsDict[ingredientsinput] == 0) {
        //get where the ingredient is to be placed
        ingredientListLocation = document.getElementById('ingredient' + currentIngredient);
        //add ingredient with plate emoji before
        ingredientListLocation.innerHTML = "&#127869; " + ingredientsinput
        
        ingredientsDict[ingredientsinput] += 1;
        currentIngredient++;

        //shake effect letting user know they can press "What can I make" button
        $( document.getElementById('pantrybutton') ).effect( "shake", "swing", 2000);
        document.getElementById('ingredientsinput').value = '';
    }
    else{
        $( document.getElementById('enterbutton') ).effect( "shake", "swing");      //if invalid input or empty input shake the enter button
    }

}

//function to delete any ingredient pressed on the current pantry list
function deleteIngredient(index) {
    //get element by id of each list element
    let ingredientList0 = document.getElementById("ingredient0");
    let ingredientList1 = document.getElementById("ingredient1");
    let ingredientList2 = document.getElementById("ingredient2");
    let ingredientList3 = document.getElementById("ingredient3");
    let ingredientList4 = document.getElementById("ingredient4");
    
    //see which element was clicked
    let clickedIndex = document.getElementById("ingredient" + index).innerText
    
    //find text and reset in dict
    clickedText = clickedIndex.slice(3)
    ingredientsDict[clickedText] = 0

    //move each remaining element up a spot on the list
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
        }
    }
    
    //get which index to add next by subtracting one
    if(currentIngredient > 0 ) {
            currentIngredient --;
        }

}

//adding effects to list
// add highlight effect to ingredient0 when a list element is clicked
$( document.getElementById('ingredient0')).click(function() {
    $( document.getElementById('ingredient0')).effect("highlight", {color: '#dc3444'});
  });

// add highlight effect to ingredient1 when a list element is clicked
$( document.getElementById('ingredient1')).click(function() {
    $( document.getElementById('ingredient1')).effect("highlight", {color: '#dc3444'});
  });

// add highlight effect to ingredient2 when a list element is clicked
$( document.getElementById('ingredient2')).click(function() {
    $( document.getElementById('ingredient2')).effect("highlight", {color: '#dc3444'});
  });

// add highlight effect to ingredient3 when a list element is clicked
$( document.getElementById('ingredient3')).click(function() {
    $( document.getElementById('ingredient3')).effect("highlight", {color: '#dc3444'});
  });

// add highlight effect to ingredient4 when a list element is clicked
$( document.getElementById('ingredient4')).click(function() {
    $( document.getElementById('ingredient4')).effect("highlight", {color: '#dc3444'});
  });



//onclick function to call the api to find recipes and add the bootstrap cards for those recipes
function searchWhatCanBeMade() {
    

    buildString = '';

    //for each statement to statement to find any keys with a value of 1 meaning they were added to the pantry list
    //then build a string out of those keys
    Object.entries(ingredientsDict).forEach(function([key, value]) {
        if(value == 1) {
            buildString += key + ",+"
        }
     });

    buildString = buildString.slice(0,-2)       //slice last 2 ",+"

    resetSuggestions(); //reset suggestion cards
    //make sure valid string
    if(prevString != buildString && buildString!='') {

        //api call string
        buildLinkString = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients='+ buildString + '&number=5&apiKey=62c793b95cc841b1a1d5e64a9cf775b2';

        //fetch call
        fetch(buildLinkString)
        .then(response => {return response.json()})
        .then(data => {
            //go through 5 recipes to find information needed to be added to the card
            for(i = 0; i< 5; i++) {
                newCard = document.createElement('div');
                let missingIngredients = " "    //string for missing ingredients

                //go through the ingredients missing to add to one single string
                for(j = 0; j<data[i].missedIngredients.length;j++) {
                    missingIngredients = missingIngredients + ' ' + data[i].missedIngredients[j].originalName + ', '
                }
                
                //make a new card with the relevant information
                newCard.innerHTML = `<div class='card' style='width: 18rem;'>
                    <img class='card-img-top' src='${data[i].image}' alt='Card image cap'>
                    <div class='card-body'>
                        <h5 class='card-title'>${data[i].title}</h5>
                        <p class='card-text'><h6>Missing Ingredients:</h6> ${missingIngredients}</p>
                        <a href='#' class='btn btn-primary'>${data[i].likes} &#x1F44D;</a>
                    </div>
                </div>`
                
                suggestionsbox.append(newCard)      //make the cards appear
            }
            prevString = buildString;
        })
    }
    else{
        $( document.getElementById('pantrybutton') ).effect( "shake");
    }

    
}

//function to reset card suggestions
function resetSuggestions() {
    console.log('prevString: ' + prevString)
    console.log('buildString: ' +buildString)
    if(prevString != buildString) {
        console.log('entered')
        suggestionsbox.innerHTML = '';
    }
    
}



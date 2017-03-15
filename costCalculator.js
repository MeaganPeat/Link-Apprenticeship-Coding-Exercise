// write a function to calculate costs
function calculateCosts(basePrice, numPeople, materialType){
    ////MARKUP VALUES////
    var flatMarkup = 1.05;
    var numPeopleMarkup = 0.012;
    
//    * If pharmaceuticals are involved, there is an immediate 7.5% markup
//    * For food, there is a 13% markup
//    * Electronics require a 2% markup
//    * Everything else, there is no markup
    var materialMarkup;
    var drugMarkup = 0.075;
    var foodMarkup = 0.13;
    var electronicsMarkup = 0.02;
    
    ////GET PARAMETERS////
    var basePrice = basePrice;
    
    //for number of people
    //check if the number of people is provided (as a number)
    if(numPeople&&numPeople!=NaN){
        //use that value
        var numPeople = numPeople;
    } else {
        //assume one person
        var numPeople = 1;
    }   
    
    
    ////CALCULATE////
    var flatMarkupCost = basePrice*flatMarkup;
    var addedMarkup = numPeople*numPeopleMarkup;
    var finalMarkup = addedMarkup + 1;
    
    var finalCost = flatMarkupCost*finalMarkup;
    return finalCost;
}

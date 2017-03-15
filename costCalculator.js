// write a function to calculate costs
function calculateCosts(basePrice, numPeople){
    ////MARKUP VALUES////
    var flatMarkup = 1.05;
    var numPeopleMarkup = 0.012;
    
    ////GET PARAMETERS////
    var basePrice = basePrice;
    
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

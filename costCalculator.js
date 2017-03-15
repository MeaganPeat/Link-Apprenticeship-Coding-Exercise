// write a function to calculate costs
function calculateCosts(basePrice, numPeople){
    //markups
    var flatMarkup = 1.05;
    var numPeopleMarkup = 0.012;
    
    var basePrice = basePrice;
    var numPeople = numPeople;
    
    var finalCost = basePrice*flatMarkup;
    return finalCost;
}

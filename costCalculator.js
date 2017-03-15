// write a function to calculate costs
function calculateCosts(basePrice, numPeople){
    //markups
    var flatMarkup = 1.05;
    var numPeopleMarkup = 0.012;
    
    //get the parameters
    var basePrice = basePrice;
    
    //check if the number of people is provided (as a number)
    if(numPeople&&numPeople!=NaN){
        //use that value
        var numPeople = numPeople;
    } else {
        //assume one person
        var numPeople = 1;
    }
    
    //make the calculations
    var finalCost = basePrice*flatMarkup;
    return finalCost;
}

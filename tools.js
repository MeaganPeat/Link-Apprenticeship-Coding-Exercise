module.exports = {

    // write a function to calculate costs
    calculateCosts(basePrice, numPeople, materialType){
        ////MARKUP VALUES////
        var flatMarkup = 1.05;
        var numPeopleMarkup = 0.012;

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

        //for materialType
        //check if there is a provided material and if it matches
        if(materialType){
            var materialType = materialType;
            var material = materialType.toLocaleLowerCase();
            if(material == 'drug'||
               material == 'drugs'||
               material == 'pharma' || 
               material == 'pharmaceuticals'){
                materialMarkup = drugMarkup;
            } else if(material == 'food'){
                materialMarkup = foodMarkup;
            } else if(material == 'electronics'){
                materialMarkup = electronicsMarkup;
            } else {
                //if its anything else
                materialMarkup = 0;
            }
        } else {
            //if no material was provided
            materialMarkup = 0;
        }

        ////CALCULATE////
        var flatMarkupCost = basePrice*flatMarkup;
        var addedMarkup = numPeople*numPeopleMarkup + materialMarkup;
        var finalMarkup = addedMarkup + 1;

        var finalCost = flatMarkupCost*finalMarkup;
        var finalCostRounded = Math.round(finalCost*100)/100;

        return finalCostRounded;
    }   
}
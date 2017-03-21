var expect = require("chai").expect;
var tools = require("../tools");

describe("calculateCosts()", function(){
    it("should calculate the final cost", function(){
        var results = tools.calculateCosts(1299.99, 3, "food");
        expect(results).to.equal(1591.58);
    });
});
var expect = require("chai").expect;
var tools = require("../tools");

describe("calculateCosts()", function(){
    it("should calculate the final cost for example 1", function(){
        var results = tools.calculateCosts(1299.99, 3, "food");
        expect(results).to.equal(1591.58);
    });
    it("should calculate the final cost for example 2", function(){
        var results = tools.calculateCosts(5432, 1, "drugs");
        expect(results).to.equal(6199.81);
    });
    it("should calculate the final cost for example 3", function(){
        var results = tools.calculateCosts(12456.95, 4, "books");
        expect(results).to.equal(13707.63);
    });
});
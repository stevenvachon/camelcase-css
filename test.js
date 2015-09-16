"use strict";
var camelCaseCSS = require("./");

var expect = require("chai").expect;



it("should work", function(done)
{
	expect( camelCaseCSS("-webkit-border-radius") ).to.equal("WebkitBorderRadius");
	expect( camelCaseCSS("-moz-border-radius")    ).to.equal("MozBorderRadius");
	expect( camelCaseCSS("-ms-border-radius")     ).to.equal("msBorderRadius");
	expect( camelCaseCSS("border-radius")         ).to.equal("borderRadius");
	
	expect( camelCaseCSS("float") ).to.equal("cssFloat");
	
	done();
});

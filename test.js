"use strict";
const camelCaseCSS = require("./");
const {expect} = require("chai");



it("works", function()
{
	expect( camelCaseCSS("-webkit-border-radius") ).to.equal("WebkitBorderRadius");
	expect( camelCaseCSS("-WEBKIT-BORDER-RADIUS") ).to.equal("WebkitBorderRadius");
	expect( camelCaseCSS("-webkIT-borDer-rADIUS") ).to.equal("WebkitBorderRadius");
	expect( camelCaseCSS("-moz-border-radius")    ).to.equal("MozBorderRadius");
	expect( camelCaseCSS("-MOZ-BORDER-RADIUS")    ).to.equal("MozBorderRadius");
	expect( camelCaseCSS("-ms-border-radius")     ).to.equal("msBorderRadius");
	expect( camelCaseCSS("-MS-BORDER-RADIUS")     ).to.equal("msBorderRadius");
	expect( camelCaseCSS("border-radius")         ).to.equal("borderRadius");
	expect( camelCaseCSS("BORDER-RADIUS")         ).to.equal("borderRadius");
	
	expect( camelCaseCSS("float") ).to.equal("cssFloat");
});

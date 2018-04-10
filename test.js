"use strict";
const {expect} = require("chai");
const {it} = require("mocha");



const test = camelCaseCSS => {
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
};



it("works as ES2015+ code", () => test( require("./") ));
it("works as ES5 code", () => test( require("./index-es5.js") ));

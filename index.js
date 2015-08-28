"use strict";
var pattern = /-(\w|$)/g;



function callback(dashChar, char)
{
	return char.toUpperCase();
}



function camelCaseCSS(property)
{
	/*
		Microsoft vendor-prefixed properties are camel cased
		differently than other browsers:
		
		-webkit-something => WebkitSomething
		-moz-something => MozSomething
		-ms-something => msSomething
	*/
	if (property.indexOf("-ms-") === 0)
	{
		property = property.substr(1);
	}
	
	return property.replace(pattern, callback);
}



module.exports = camelCaseCSS;

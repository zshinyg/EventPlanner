// Jamison Walrod
// EECS 448
// Project 1
// 29 January 2018
//
// Code for checkbox used in html was found on StackOverflow: https://stackoverflow.com/questions/28372466/how-to-call-a-function-from-checkbox-onclick-or-onchange
// String to array: https://stackoverflow.com/questions/19418244/elegant-way-to-convert-string-of-array-of-arrays-into-a-javascript-array-of-arra
// Try and catch: https://www.w3schools.com/js/js_errors.asp
// Checking if parameter is an array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
// Check to see if string includes a character:	https://www.w3schools.com/jsref/jsref_includes.asp
// Using reduce to flatten a nested array: https://stackoverflow.com/questions/27266550/how-to-flatten-nested-array-in-javascript
// 
//

main = function() {

	chalk.print("Please use your administrative login.");
	chalk.newline();
}


//
// Creates an array and calls flatten function; catches errors
function adminLogin()
{
	try
	{
		//// Heading ////
		chalk.newline();
		chalk.print("Please use your administrative login.");
		chalk.newline();
		
		//// Enter username ////
		chalk.print("Username: ");
		let u = chalk.entrybox();
		u.then(function(val)
		{
			console.log(val);
		});
		
		//// Enter password ////
		chalk.print("Password: ");
		let p = chalk.entrybox();
		p.then(function(val)
		{
			console.log(val);
		});
		
		Promise.all([u,p]).then(function(a)
		{
			let arr;
			
			if(a[0].includes(" "))
			{
				throw e;
			}
			else
			{
				console.log(arr);
			}
			
			//let flat = flatten(arr);
			//showArray(flat);
			
		}).catch(function(e)
		{
			console.log(p);
			console.log("ERROR IN PROMISE: Invalid input!");
			chalk.println("OOPS!");
			chalk.println("Invalid input in promise!");
		});
	}
	catch(err)
	{
		console.log("ERROR: Invalid input!");
		chalk.println("OOPS!");
		chalk.println("Invalid input!");
	}
}


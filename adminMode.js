// Jamison Walrod
// EECS 448
// Project 1
// 31 January 2018
//
// Code for checkbox used in html was found on StackOverflow: https://stackoverflow.com/questions/28372466/how-to-call-a-function-from-checkbox-onclick-or-onchange
// String to array: https://stackoverflow.com/questions/19418244/elegant-way-to-convert-string-of-array-of-arrays-into-a-javascript-array-of-arra
// Try and catch: https://www.w3schools.com/js/js_errors.asp
// Checking if parameter is an array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
// Check to see if string includes a character:	https://www.w3schools.com/jsref/jsref_includes.asp
// 
// 
//

main = function() {

	//chalk.print("Please use your administrative login.");
	chalk.newline();
}


//
// Takes in the username and password of an administrator 
function adminLogin()
{
	try
	{
		//// Heading ////
		chalk.newline();
		//chalk.print("Please use your administrative login.");
		//chalk.newline();
		
		//// Enter username ////
		chalk.print("Username: ");
		let u = chalk.entrybox();
		u.then(function(val)
		{
			console.log("Username: ", val);
		});
		
		//// Enter password ////
		chalk.print("Password: ");
		let p = chalk.entrybox();
		p.then(function(val)
		{
			console.log("Password: ", val);
		});
		
		Promise.all([u,p]).then(function(a)
		{
			
			console.log("Inside promise");
			
			if(a[0].includes(" "))
			{
				console.log(a);
				console.log("ERROR: Invalid username!");
				//chalk.println("");
				chalk.println("Invalid username! Cannot contain spaces!");
				throw e;
				
			}
			else if(a[1].includes(" "))
			{
				console.log(a);
				console.log("ERROR: Invalid password!");
				//chalk.println("");
				chalk.println("Invalid password! Cannot contain spaces!");
				throw e;
			}
			else if(adminCompare(a) != true)
			{
				console.log(a);
				console.log("ERROR: No login found!");
				chalk.println("");
				chalk.println("No login found! Please try again.");
				adminLogin();
			}
			else
			{
				console.log("Success!");
				chalk.println("");
				chalk.println("Welcome!");
				//-> eventFunction();
			}
			
		}).catch(function(e)
		{
			console.log(u);
			console.log("ERROR: Invalid login!");
			//chalk.println("");
			chalk.println("Invalid login! Please try again.");
			adminLogin();
		});
	}
	catch(err)
	{
		console.log("ERROR: Invalid input!");
		chalk.println(" ");
		chalk.println("ERROR");
	}
}

//
// Compares user login creditentials to  to see if they are in the system.
function adminCompare(a)
{
	let arr = ["admin","1234"];
	console.log(a);
	if(JSON.stringify(a) == JSON.stringify(arr))
	{
		return true;
	}
	else
	{
		return false;
	}
}

// Jamison Walrod
// EECS 448
// Project 1
// 02 February 2018
//
// Code for checkbox used in html was found on StackOverflow: https://stackoverflow.com/questions/28372466/how-to-call-a-function-from-checkbox-onclick-or-onchange
// String to array: https://stackoverflow.com/questions/19418244/elegant-way-to-convert-string-of-array-of-arrays-into-a-javascript-array-of-arra
// Try and catch: https://www.w3schools.com/js/js_errors.asp
// Checking if parameter is an array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
// Check to see if string includes a character:	https://www.w3schools.com/jsref/jsref_includes.asp
//
// Comparing two strings: https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
// Open new html in javascript: https://stackoverflow.com/questions/442384/jumping-to-a-new-html-page-with-javascript
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

		//// Promise.all will validate the login input ////
		Promise.all([u,p]).then(function(a)
		{
			console.log("Inside Promise.all");

			//// Checks if username has a space ////
			if(a[0].includes(" "))
			{
				console.log(a);
				console.log("ERROR: Invalid username!");
				//chalk.println("");
				chalk.println("Invalid username! Cannot contain spaces!");
				throw e;

			}
			//// Checks if password has a space ////
			else if(a[1].includes(" "))
			{
				console.log(a);
				console.log("ERROR: Invalid password!");
				//chalk.println("");
				chalk.println("Invalid password! Cannot contain spaces!");
				throw e;
			}
			//// Checks if username and password exist ////
			else if(adminCompare(a) != true)
			{
				console.log(a);
				console.log("ERROR: No login found!");
				chalk.println("");
				chalk.println("No login found! Please try again.");
				adminLogin();
			}
			//// Transfers admin to add_event.html on successful login////
			else
			{
				console.log("Success!");
				chalk.println("Welcome!");
				window.location.href = "add_event.html";
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


function check(login) {

	if(login.userid.value == "admin" && login.password.value == "1234") {
		window.location="events.html";
	}
	else{
		alert("Incorrect username or password.");
	}


}



function populateEventSelect(id) {


	console.log("DEBUG: ran populateEventSelect");
    unpopulateEvents();
    var docfrag = document.createDocumentFragment();
	console.log(masterEvent.size);

      for(var i = 0; i < masterEvent.size; i++){

          //Get the node at index i from masterEvent

          var node = masterEvent.returnAt(i);
          var event = node.data.title;
          console.log(event);

          docfrag.appendChild(new Option(event));


      }


  var select = document.getElementById(id);
  select.appendChild(docfrag);

}


function unpopulateEvents(){

    var events = document.getElementById("events");

    for( var i = 0; i < masterEvent.size; i++){
        events.remove(events.i);
    }

}

function addRow(name) {

	console.log("ran addRow");

    var table = document.getElementById("attendeeTable")

    tr = document.createElement('tr');
    tr.appendChild(document.createElement('td'));
    tr.cells[0].appendChild(document.createTextNode(name));
    table.appendChild(tr);

}


function populateAttendeeTable() {

	window.masterUser = populateUser("masterUser");
	var firstName = "";
	var lastName = "";
	console.log("DEBUG: masterUser size = "+masterUser.size);
	for(var i = 0; i < masterUser.size; i++) {
		firstName = masterUser.data.firstName;
		lastName = masterUser.data.lastName;
		name = firstName + " " + lastName;
		addRow(name);
	}
}

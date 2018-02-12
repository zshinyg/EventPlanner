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

    var table = document.getElementById("attendeeTable");

    tr = document.createElement('tr');
    tr.appendChild(document.createElement('td'));
    tr.cells[0].appendChild(document.createTextNode(name));
    table.appendChild(tr);

}


function populateAttendeeTable() {

	
	var event = document.getElementById("events").value;
	
	var firstName = "";
	var lastName = "";
	window[event] = populateUser(event);

	console.log("DEBUG: masterUser size = "+ window[event].size);
	for(var i = 0; i < window[event].size; i++) {
		
		var node = window[event].returnAt(i);
		firstName = node.data.firstName;
		lastName = node.data.lastName;

		name = firstName + " " + lastName;
		addRow(name);
	}
}

function unpopulateTable() {


	var table = document.getElementById("attendeeTable");
	console.log(table);
	for(var i = table.rows.length - 1; i > 0; i--)
	{
		table.deleteRow(i);
	}
}

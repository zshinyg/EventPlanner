/**
 * @module adminMode
 * @class adminMode
 */


/**
* Populates the events to see which events can be selected 
*/
function populateEventSelect(id) {


	console.log("DEBUG: ran populateEventSelect");
    unpopulateEvents();
    var docfrag = document.createDocumentFragment();
	console.log(masterEvent.size);

      for(var i = 0; i < masterEvent.size; i++){

		  /**
		  * Get the node at index i from masterEvent
		  */

          var node = masterEvent.returnAt(i);
          var event = node.data.title;
          console.log(event);

          docfrag.appendChild(new Option(event));


      }


  var select = document.getElementById(id);
  select.appendChild(docfrag);

}

/**
* Removes the events when page is reloaded
*/
function unpopulateEvents(){

    var events = document.getElementById("events");

    for( var i = 0; i < masterEvent.size; i++){
        events.remove(events.i);
    }

}

/**
* Adds the attendee to the Attendee Table
*/
function addRow(name) {

	console.log("ran addRow");

    var table = document.getElementById("attendeeTable");

    tr = document.createElement('tr');
    tr.appendChild(document.createElement('td'));
    tr.cells[0].appendChild(document.createTextNode(name));
    table.appendChild(tr);

}

/**
 * Populates the Attendee Table to see who is attending
 */
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

/**
* Removes the Attendee Table when page is reloaded
*/
function unpopulateTable() {


	var table = document.getElementById("attendeeTable");
	console.log(table);
	for(var i = table.rows.length - 1; i > 0; i--)
	{
		table.deleteRow(i);
	}
}

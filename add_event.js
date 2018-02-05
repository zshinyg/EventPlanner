"use-strict"


/**
 * Toggle 24 hour mode and 12 hour mode
 * Checks if the 24-Hour checkbox is checked then populates the
 * select box with the correct number of options.
 */

// Global variable for saving time in 24hr time format or not
 var clock24 = false;

function timeSwitcher(){
    console.log("timeSwitcher Ran");

    var checkBox = document.getElementById("timeCheckBox");
    var el1 = "startHour";
    var el2 = "endHour";

    if(checkBox.checked == true){
        unpopulateHour(el1);
        populateHours(23,0,el1);
        unpopulateHour(el2);
        populateHours(23,0,el2);
        removeAMPM();
        clock24 = true;

    } else {

        unpopulateHour(el1);
        populateHours(12,1,el1);
        unpopulateHour(el2);
        populateHours(12,1,el2);
        addAMPM();
        clock24 = false;
    }
}



function addAMPM(){
    document.getElementById("ampm").style.visibility="";
    document.getElementById("ampm2").style.visibility="";

}

/**
 * Remove AMPM select box
 */
 function removeAMPM(){
     document.getElementById("ampm").style.visibility="hidden";
     document.getElementById("ampm2").style.visibility="hidden";

 }


/**
 * populates the select box with the correct number of hours
 * @param {number} mode sets the mode for the select box
 *      23 for 24-Hour mode and 12 for 12-Hour mode.
 * @param {number} i sets the number for the select box to
 *      start counting at. Should be 1 for 12-Hour mode and
 *      5 for 24-Hour mode.
 * @param {string} id This is the element id of the select
 *      box you would like to populate.
 */
 function populateHours(mode,i,id) {

     var docfrag = document.createDocumentFragment();

     for (i; i <=mode; ++i){

        /**
         * TODO: make it so it populates with the correct hours for the project.
         */

         if(){
            docfrag.appendChild(new Option(i, i));
         }
     }

     var select = document.getElementById(id);
     select.appendChild(docfrag);
 }



/**
 * unpopulates this given select box
 * @param {string} id This is the element id of the select
 *      box you would like to populate.
 */
function unpopulateHour(id){

    var hours = document.getElementById(id);

    for( var i = 0; i <= 24; i++){
        hours.remove(hours.i);
    }

}





function submitVals()  {
  var eventTitle = document.getElementById("event").value;
  var date = document.getElementById("date").value;

  // var date is in form yyyy-mm-dd
  //                     0123456789
  // .substr(start,length)
  var dd = date.substr(8,2);
  var mm = date.substr(5,2);
  var yyyy = date.substr(0,4);
  var day = parseInt(dd);
  var month = parseInt(mm);
  var year = parseInt(yyyy);
  if (month == 01 && day == 01){
    window.alert("Can't schedule a meeting on New Year's Day.");
    return 0;
  }
  if (month == 07 && day == 04){
    window.alert("Can't schedule a meeting on Independence Day.");
    return 0;
  }
  if (month == 12 && day == 25){
    window.alert("Can't schedule a meeting on Christmas.");
    return 0;
  }

  var shour = document.getElementById("startHour").value;
  var smin = document.getElementById("startMinutes").value;
  var lhour = document.getElementById("endHour").value;
  var lmin = document.getElementById("endMinutes").value;

  var ampm1 = document.getElementById("ampm").value;
  console.log(ampm1);
  var ampm2 = document.getElementById("ampm2").value;
  console.log(ampm2);

  // TODO For the hours, see if 24/12 hours are toggled.  If 12, see if it is am or pm
  //   FOR STORING THE TIME IN 24 HOUR MODE
  //  ALL TIMES OF EVENTS ARE STORED THIS WAY
  if (!clock24){
     // See if am/pm selected for both cases
     // If it is pm, add 12 to the value
     if ((ampm1 == "PM") && (shour > 12)){
       shour = shour+12;
     }
     if ((ampm2 == "PM") && (lhour > 12)){
       lhour = lhour+12;
     }
     if ((ampm1 == "AM") && (shour == 12)){
       shour = 0;
     }
     if ((ampm2 == "AM") && (lhour == 12)){
       lhour = 0;
     }

  }

  // TEST IN CONSOLE
  console.log("Event name: "+ eventTitle);
  console.log("Date: " + dd + "/" + mm + "/" + yyyy);
  console.log("Start time: "+shour + ":"+smin);
  console.log("End time: " + lhour + ":" + lmin);
}


function addRow() {

    var table = document.getElementById("eventTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var newText = document.createTextNode('New Row');
    cell1.appendChild(newText);

}

/**
 * TODO: get rid of time slots that we are supposed to in the
 *      project description.
 */

/**
 * TODO: add funtion that displays a success message after
 *       the user submits the form.
 */

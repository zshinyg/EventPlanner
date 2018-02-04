/**
* @date 1/31/18
* @file add_event.js
* @brief file to help with add_event.htm
*/


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
 * 24-hour mode
 * Adds the correct number of options in a select menu
 * @param: Enter a value of either 24 or 12 to select which mode to run and the value for the time to start at.
 */

 function populateHours(mode,i,id) {

     var docfrag = document.createDocumentFragment();

     for (i; i <=mode; ++i)
     {
          docfrag.appendChild(new Option(i, i));
     }

     var select = document.getElementById(id);
     select.appendChild(docfrag);
 }



 /**
  * Remove 24 Hour mode
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

  var shour = document.getElementById("startHour").value;
  var smin = document.getElementById("startMinutes").value;
  var lhour = document.getElementById("endHour").value;
  var lmin = document.getElementById("endMinutes").value;

  var ampm1 = document.getElementById("ampm");
  console.log(ampm1);
  var ampm2 = document.getElementById("ampm2");
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
     if ((ampm1 == "AM") && (shour == 12))
     {
       shour = 0;
     }
     if ((ampm2 == "AM") && (lhour ==12)){
       lhour =0;
     }

  }

  // TEST IN CONSOLE
  console.log("Event name: "+ eventTitle);
  console.log("Date: " + dd + "/" + mm + "/" + yyyy);
  console.log("Start time: "+shour + ":"+smin);
  console.log("End time: " + lhour + ":" + lmin);
}



/**
 * TODO: add function that displays an error message if
 *       the time is not in 20 second intervals
 */


/**
 * TODO: add funtion that displays a success message after
 *       the user submits the form.
 */


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
    var ampm1 = "ampm";
    var ampm2 = "ampm2";

    if(checkBox.checked == true){
        removeAMPM();
        unpopulateHour(el1);
        populateHours(23,0,el1,ampm1);
        unpopulateHour(el2);
        populateHours(23,0,el2,ampm2);
        clock24 = true;

    } else {
        addAMPM();
        unpopulateHour(el1);
        populateHours(12,1,el1,ampm1);
        unpopulateHour(el2);
        populateHours(12,1,el2,ampm2);
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
 function populateHours(mode,i,id,ampmID) {

     var docfrag = document.createDocumentFragment();

    //24-Hour mode
     if(mode == 23){

        for (i; i <=mode; ++i){
             if( (i >= 5) && (i < 12) || ( i > 12)) {
                docfrag.appendChild(new Option(i, i));
             }
         }
     }

     //12-Hour mode
     if(mode == 12){
        var ampm = document.getElementById(ampmID).value;

        if( ampm == "AM") {
            for(i; i <= mode; ++i) {
                if( (i >= 5) && ( i < 12)){
                    docfrag.appendChild(new Option(i, i));
                }
            }
        }
        else if( ampm == "PM"){
            for(i; i <= mode; ++i) {
                if( (i < 12)){
                    docfrag.appendChild(new Option(i, i));
                }

            }
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


  // Integer values of date
  var day = parseInt(10, dd);
  var month = parseInt(10,mm);
  var year = parseInt(10,yyyy);

  var shour = document.getElementById("startHour").value;
  var strthour = parseInt(shour);
  var smin = document.getElementById("startMinutes").value;
  var strtmin = parseInt(smin);
  var lhour = document.getElementById("endHour").value;
  var endhour = parseInt(lhour);
  var lmin = document.getElementById("endMinutes").value;
  var endmin = parseInt(lmin);

  // Integer values of time
  var startHour = parseInt(10, shour);
  var startMin = parseInt(10, smin);
  var lastHour = parseInt(10, lhour);
  var lastMin = parseInt(10, lmin);

  var ampm1 = document.getElementById("ampm").value;
  console.log(ampm1);
  var ampm2 = document.getElementById("ampm2").value;
  console.log(ampm2);

  //   For the hours, see if 24/12 hours are toggled.  If 12, see if it is am or pm
  //   FOR STORING THE TIME IN 24 HOUR MODE
  //  ALL TIMES OF EVENTS ARE STORED THIS WAY
  if (!clock24){
     // See if am/pm selected for both cases
     // If it is pm, add 12 to the value

     if ((ampm1 == "PM") && (strthour != 12)){
       strthour = strthour+12;
     }
     if ((ampm2 == "PM") && (endhour != 12)){
       endhour = endhour+12;
     }
     if ((ampm1 == "AM") && (strthour == 12)){
       strthour = 00;
     }
     if ((ampm2 == "AM") && (endhour == 12)){
       endhour = 00;
     }

  }

  // TEST IN CONSOLE
  console.log("Event name: "+ eventTitle);
  console.log("Date: " + day + "/" + month + "/" + year);
  console.log("Start time: "+strthour + ":"+strtmin);
  console.log("End time: " + endhour + ":" + endmin);
}


function addRow() {

    var table = document.getElementById("eventTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    /**
     * TODO: Needs to add an yes or no button under attending.
     * 
     */


    cell1.innerHTML = "new cell"
    cell2.innerHTML = "new cell"
    cell3.innerHTML = "new cell"
    cell4.innerHTML = "new cell"

}




function invalidDate() {
  if (month == 01 && day == 01){
    window.alert("Can't schedule a meeting on New Year's Day.");
    return 0;
  }
  else if (month == 07 && day == 04){
    window.alert("Can't schedule a meeting on Independence Day.");
    return 0;
  }
  else if (month == 12 && day == 25){
    window.alert("Can't schedule a meeting on Christmas.");
    return 0;
  }
  else{
    window.location("redirect_interface.html");
  }
}



/**
 * TODO: Add a function that wont allow a user to create an
 *      event that goes back in time.
 */
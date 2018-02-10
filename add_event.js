"use-strict"


/**
 * Toggle 24 hour mode and 12 hour mode
 * Checks if the 24-Hour checkbox is checked then populates the
 * select box with the correct number of options.
 */

// Global variable for saving time in 24hr time format or not
 var clock24 = false;

// Used for web page redirection if date is invalid
 var badDate;

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
  // console.log(ampm1);
  var ampm2 = document.getElementById("ampm2").value;
  // console.log(ampm2);

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

  // // TEST IN CONSOLE
  // console.log("Event name: "+ eventTitle);
  // console.log("Date: " + month + "/" + day + "/" + year);
  // console.log("Start time: "+strthour + ":"+strtmin);
  // console.log("End time: " + endhour + ":" + endmin);

  let inputDate = new Date(year, month-1, day, strthour, strtmin);
  let currentDate = new Date();
  // console.log("Input date: "+ inputDate);
  // console.log("Curent date: "+ currentDate);

  var length = ((endhour*60)+endmin)-((strthour*60)+strtmin);

  // Check date

  if (!isInvalidDate(month, day, year, inputDate, currentDate, length)){

   // If the date is valid, add it to the list of events
   // and write to file

   populateEvent();
    var temp = new meeting(eventTitle, inputDate, length);
    console.log("before the add");
    window.masterEvent.printAll();
    window.masterEvent.addBack(temp);
    console.log("After the add");
    window.masterEvent.printAll();

    var arr = eventArray(masterEvent);
    writeData(arr, 3, "masterEvent");


    redirect(false);
  } // End if on invalid date


  else{
    redirect(true);
  }


} // end submitVals

// Checks to see if the date can be used or not
function isInvalidDate(month, day, year, inputDate, currentDate, length)
{
    if (month == 01 && day == 01){
        window.alert("Can't schedule a meeting on New Year's Day. Please try again.");
        console.log("ERROR: Can't schedule a meeting on New Year's Day.");

        return true;
    }
    else if (month == 07 && day == 04){
        window.alert("Can't schedule a meeting on Independence Day. Please try again.");
        console.log("ERROR: Can't schedule a meeting on Independence Day.");

        return true;
    }
    else if (month == 12 && day == 25){
        window.alert("Can't schedule a meeting on Christmas. Please try again.");
        console.log("ERROR: Can't schedule a meeting on Christmas.");

        return true;
    }

    else if(inputDate < currentDate)
    {
        window.alert("Can't schedule a meeting in the past. Please try again.");
        console.log("ERROR: Can't schedule a meeting in the past.");

        return true;
    }
    else if(length == 0)
    {
        window.alert("Can't start and end a meeting at the same time. Please try again.");
        console.log("ERROR: Can't start and end a meeting at the same time.");

        return true;
    }
    else
    {
        console.log("Success!");
        return false;
    }
} // end isInvalidDate




// Redirects the page according to if date is invalid
function redirect(badDate)
{
    if(badDate == true)
    {
        console.log("Not redirecting, refreshing instead");
        window.location.href = "add_event.html";
    }
    else if(badDate == false)
    {
        console.log("Redirecting to redirect page");
        window.location.href = "redirect_interface.html";
        return true;
    }

}


/**
 * Adds a row to the table on user_availabilty.html. This will
 * be used to add the given events to the table.
 */
function addRow() {

    var table = document.getElementById("eventTable")

    tr = document.createElement('tr');
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));

    var checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";

    tr.cells[0].appendChild(document.createTextNode('Meeting'));
    tr.cells[1].appendChild(document.createTextNode('2/7/18'));
    tr.cells[2].appendChild( document.createTextNode('10:20 AM - 11:00 PM') );
    tr.cells[3].appendChild(checkbox);

    table.appendChild(tr);

}

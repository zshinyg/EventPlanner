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

    } else {
        
        unpopulateHour(el1);
        populateHours(12,1,el1);
        unpopulateHour(el2);
        populateHours(12,1,el2);
        addAMPM();
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






/**
 * TODO: add function that displays an error message if
 *       the time is not in 20 second intervals
 */


/**
 * TODO: add funtion that displays a success message after
 *       the user submits the form.
 */
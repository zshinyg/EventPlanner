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
 

    if(checkBox.checked == true){
        
        unpopulateHour();
        populateHours(24);
        /**
        * TODO: add function that gets rid of AMPM in 24 hour mode
        */
        
    } else {
        
        unpopulateHour();
        populateHours(12);

    }
    

}


/**
 * 24-hour mode
 * Adds the correct number of options in a select menu
 * @param: Enter a value of either 24 or 12 to select which mode to run.
 */

 function populateHours(mode) {
     
     var docfrag = document.createDocumentFragment();

     for (var i = 1; i <=mode; ++i)
     {
          docfrag.appendChild(new Option(i, i));
     }
     
     var select = document.getElementById("selectHour");
     select.appendChild(docfrag);
 }



 /**
  * Remoove 24 Hour mode 
  */

function unpopulateHour(){
    var hours = document.getElementById("selectHour")

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
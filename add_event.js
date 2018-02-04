"use-strict"


/**
 * Toggle 24-hour mode and 12-hour mode.
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
        hideAMPM();

    } else { 
        unpopulateHour(el1);
        populateHours(12,1,el1);
        unpopulateHour(el2);
        populateHours(12,1,el2);
        showAMPM();
    }
}

/**
 * Shows the AMPM select when 24-Hour mode is disabled.
 */
function showAMPM(){
    document.getElementById("ampm").style.visibility="";
    document.getElementById("ampm2").style.visibility="";

}

/**
 * Hides AMPM select box when 24-Hour mode is enabled.
 */
 function hideAMPM(){
     document.getElementById("ampm").style.visibility="hidden";
     document.getElementById("ampm2").style.visibility="hidden";
 }


/**
 * Populates the selct box with the given amount of hours.
 * 12 for 12-Hour mode and 23 for 24-Hour mode.
 * @param {number} mode 12 for 12-Hour mode and 23 for 
 *      24-Hour mode.
 * @param {number} i This is the number that the select box
 *      starts at. It should be a 1 for 12-Hour mode and
 *      0 for 24-hour mode.
 * @param {string} id This is the element id of the select box
 *      that needs to be populated.
 */
 function populateHours(mode,i,id) {

     var docfrag = document.createDocumentFragment();

     for (i; i <=mode; ++i){
          docfrag.appendChild(new Option(i, i));
     }
     
     var select = document.getElementById(id);
     select.appendChild(docfrag);
 }



/**
 *  Unpopulates the select box in preperation of repopulating it.
 *  @param {string} id This is the element id of the select box    that needs to be populated.
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
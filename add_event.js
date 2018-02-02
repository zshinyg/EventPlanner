/**
* @date 1/31/18
* @file add_event.js
* @brief file to help with add_event.htm
*/


"use-strict"


/**
 * Toggle 24 hour mode and 12 hour mode
 */

function timeSwitcher(){
    console.log("timeSwitcher Ran");
    
    var checkBox = document.getElementById("timeCheckBox");
 


    if(checkBox.checked == true){
        
        mode24HR(24);
        
    } else if(checkBox.checked == false) {
        

    }
    

}


/**
 * 24-hour mode
 */

 function mode24HR(mode) {
     console.log("populate hour ran");
     
     var docfrag = document.createDocumentFragment();

     for (var i = 1; i <=mode; ++i)
     {
          docfrag.appendChild(new Option(i, i));
     }
     
     var select = document.getElementById("selectHour");
     select.appendChild(docfrag);
 }



/**
 * TODO: add function that displays an error message if
 *       the time is not in 20 second intervals
 */


/**
 * TODO: add funtion that displays a success message after
 *       the user submits the form.
 */
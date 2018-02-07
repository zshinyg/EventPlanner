// POPULATE.JS
//
// WHEN AT HOME PAGE, THIS FUNCTION WILL READ IN ALL DATA AND
// POPULATE LISTS
//
// TWO MASTER LISTS:
//      masterEvent
//      masterUser
//
//  THESE TWO HAVE ALL USERS AND EVENTS INSIDE
//  MASTER EVENT HAS THE NAME OF THE LISTS THAT STILL HAVE
//  EVENTS.  THESE ARE NAMED BY YEARS
//
//  MASTERUSER HAS ALL OF THE USERS LISTED
//
//  GLOBAL VARIABLES HERE ARE THE ARRAY FOR LISTS OF YEARS AND
//  THE LIST OF MASTER USERS

var masterEvent = new linkedlist;
var masterUser = new linkedlist;

function populate() {

  var mE = readData("masterEvent");
  var mU = readData("masterUser");

  if (mE == null){
    var arr = new Array;
    writeData(arr, 0, "masterEvent");
  }

  if (mU == null){
    var arr = new Array;
    writeData(arr, 0, "masterUser");
  }

  // For master user, create list of all users
  for (var i = 0; i < mU.length; i+=2){
    var lastName = mU[i];
    var firstName = mU[i+1];
    var person = new attendee(lastName, firstName);
    masterUser.add(attendee);
  }


  // For master event, create a list of all events
  for (var i = 0; i < mE.length; i+=3){
    var title = mE[i];
    var date = mE[i+1];
    var length = mE[i+2];
    var temp = new meeting(title, date, length);
    masterEvent.add(temp);
  } // end for i

}

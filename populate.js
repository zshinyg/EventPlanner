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

var masterEvent = new Array;
var masterUser = new linkedlist;

function populate() {

  masterEvent = readData("masterEvent");
  var mU = readData("masterUser");

  if (masterEvent == null){
    var arr = new Array;
    writeData(arr, 0, "masterEvent");
  }

  if (mU == null){
    var arr = new Array;
    writeData(arr, 0, "masterUser");
  }

  // For master event, create lists of each of the years
  for (var i = 0; i < masterEvent.length; i++){
    masterEvent[i] = new linkedlist;
  }

  // For master user, create list of all users
  for (var i = 0; i < mU.length; i+=2){
    var lastName = mU[i];
    var firstName = mU[i+1];
    var person = new attendee(lastName, firstName);
    masterUser.add(attendee);
  }

  // By now, there is LL of users, and an array of lists for
  // the years of events. Now we need to run though each
  // list of years and populate those lists

  for (var i = 0; i < masterEvent.length; i++){
    var year = readData(masterEvent[i]);
    if (year == null){
      break;
    }
    for (var j = 0; j < year.length; j+=8){
      var thing = new meeting(year[j],year[j+1],year[j+2],year[j+3],year[j+4],year[j+5],year[j+6],year[j+7]);
    } // end for j
  } // end for i

}

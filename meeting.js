// event.js
// THE NAME OF THE EVENT IS TAKEN AT CONSTRUCTION TIME
// VARIABLES INCLUDED ARE TITLE, MONTH, DAY, YEAR, TIME
// HAS A LINKED LIST

//  FUNCTION OF EVENT
// STRING VARIALBE:
//          TITLE
// INTEGER VARIABLES:
//          MONTH, DAY, YEAR, HOUR, MIN
//          SMIN AND SHOUR ARE START HOUR MIN AND HOUR
//          L IS LAST
// IMPORTANT:
//          ALL HOURS ARE STORED IN 24 HOUR FORMAT FROM 0-23
function meeting (title, month, day, year, shour, smin, lhour, lmin) {
  this.title = title;
  this.month = month;
  this.day = day;
  this.year = year;
  this.shour = shour;
  this.smin = smin;
  this.lhour = lhour;
  this.lmin = lmin;
  this.list = new linkedlist();
}


// ADD ATTENDEE
// Takes in a first name and a last name
// creates a new attendee, and adds it to the list
meeting.prototype.add = function (lastName, firstName){

  var person = new attendee(lastName, firstName);
  this.list.add(person);
  return person;
}



// VALUE OF
// WORKAROUND FOR OPERATOR OVERLOADING
// RETURNS THE MONTH TO ORGANIZE BY
// EXAMPLE: EVENTS
//        A = COW, MONTH = 7
//        B = CAT, MONTH = 8
//      A>B RETURNS FALSE THANKS TO THIS
meeting.prototype.valueOf = function () {
  return this.month;
}

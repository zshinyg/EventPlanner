/**event.js
*@module meeting
*
*@constructor
*THE NAME OF THE EVENT IS TAKEN AT CONSTRUCTION TIME
*
*@param {string} title
*
*@param {number} length
*
*@param {date} date
*
*@param {linkedlist} list
*
*IMPORTANT:
*         ALL HOURS ARE STORED IN 24 HOUR FORMAT FROM 0-23
*/
function meeting (title, date, length) {
  this.title = title;
  this.date = new Date(date);
  this.len = length;
  this.list = new linkedlist();
}


/**ADD ATTENDEE
*@method add() Takes in a first name and a last name
*creates a new attendee, and adds it to the list.
*@param {string} lastName
*@param {string} firstName
*/
meeting.prototype.add = function (lastName, firstName){

  var person = new attendee(lastName, firstName);
  this.list.add(person);
  return person;
}



/**VALUE OF
*@method valueOf() Allows for comparison of events by date.
*/
meeting.prototype.valueOf = function () {
  return this.date.getTime();
}

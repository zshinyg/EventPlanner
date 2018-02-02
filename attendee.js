// ATTENDEE.JS
//
// CLASS FOR STORING INFORMATION ON EACH ATENDEE OF AN EVENT
// KEEPS NAME OF PERSON AND POTENTIALLY PASSWORD

function attendee (lastName, firstName){
    this.lastName = lastName;
    this.firstName = firstName;
}

attendee.prototype.getLastName = function () {
  return this.lastName;
}


attendee.prototype.getFristName = function () {
  return this.firstName;
}

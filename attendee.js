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


// VALUE OF
// WORKAROUND FOR OPERATOR OVERLOADING
// RETURNS THE LASTNAME TO ORGANIZE BY
// EXAMPLE: ATTENDEE
//        A = LASTNAME = BILL
//        B = LASTNAME = CHANCE
//      A>B RETURNS FALSE THANKS TO THIS
attendee.prototype.valueOf = function () {
  return this.lastName;
}

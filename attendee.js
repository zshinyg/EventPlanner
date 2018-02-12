/**
 * @module attendee
 * @class attendnee
 *
 */



// ATTENDEE.JS
//
// CLASS FOR STORING INFORMATION ON EACH ATENDEE OF AN EVENT
// KEEPS NAME OF PERSON AND POTENTIALLY PASSWORD

/**
*@method attendee
*@param string
*@param string
*@return none
*/

function attendee (lastName, firstName){
    this.lastName = lastName;
    this.firstName = firstName;
}


/**
*@method getLastName
*@param none
*@return this.lastName
*/
attendee.prototype.getLastName = function () {
  return this.lastName;
}

/**
*@method getFirstName
*@param none
*@return none
*/
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
/**
*@method valueOf
*@param none
*@returns this.lastName 
*/
attendee.prototype.valueOf = function () {
  return this.lastName;
}

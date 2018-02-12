/**
 * @module global
 * @class   global
 */


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

/**
* @global lists for keeping track of
*         all users and all events
*/
var masterEvent = new linkedlist();
var masterUser = new linkedlist();

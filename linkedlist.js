/**
 * @module linkedlist
 * @class   linkedlist
 */




// linkedlist.js
//
// LinkedList consisting of type nodes
// adapted from https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392

//              NODE FUCNTIONS
//_________________________________________________________________________

// CONTAINS THE DATA TYPE NODE IN ORDER TO CONSTRUCTO A LINKED LIST
// ADAPTED FROM https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392

/**
*@method node
*@param {object} data
*@return {none}
*/

function node (data) {
  this.data = data;
  this.next = null;
}

// GREATER
// RETURNS TRUE IF THE CURRENT NODE'S DATA IS LARGER THAN THE INPUT DATA
// FLASE OTHERWISE
/**
*@method greater
*@param {object} data
*@return {bool} val
*/
node.prototype.greater = function (data) {
  val = false;

  if (this.data > data){
    val = true;
  }
  return val;
}

// EQUAL
// RETURNS TRUE IF THE CURRENT NODE AND INPUT VALUE ARE EQUAL
// FALSE OTHERWISE
/**
*@method equal
*@param {object} data
*@return {bool} val
*/
node.prototype.equal = function (data){
  val = false;

  if (this.data == data){
    val = true;
  }
  return val;
}





//              LINKED LIST FUNCTIONS
//_________________________________________________________________________

/**
*@method linkedlist
*@param none
*@return {none}
*/
function linkedlist() {

  // CONSTRUCTOR
  // TAKES NO PARAMETERS
  // SETS SIZE TO 0 AND FIRST TO NULL
    this.size = 0;
    this.first = null;
}


//____________________________________________________________________________

// ADD
// TAKES IN A VALUE TO SAVE IN THE NODE (IN OUR CASE AN ATTENDEE)
// THIS FUNCTION SORTS THE DATA FROM LEAST (FIRST VALUE)  TO GREATEST (LAST NODE)
//
/**
*@method add
*@param {object} val
*@return {object} node
*/
linkedlist.prototype.add = function (val) {

  var m_node = new node(val);
  currentnode = this.first;

  // Check to see if the list is empty
  if (this.first == null)
  {
      this.first = m_node;
  } // end if

  else if (this.size == 1){
    //console.log("size == 1");

    if (currentnode.greater(val)){
      console.log("Current node value: " + currentnode.data + " is greater than " + val);
      this.first = m_node;
      m_node.next = currentnode;
    }//. end if

    else {
      this.first.next = m_node;
    } // end else
  } // end else if size == 1

  else if (currentnode.greater(val)){

    console.log("Current node value: " + currentnode.data + " is greater than " + val);
    this.first = m_node;
    m_node.next = currentnode;
  }// end else if

  else {

    priornode = this.first;
    currentnode = this.first.next;

    while (currentnode) {

      if (currentnode.greater(val)){

        console.log("Current node value: " + currentnode.data + " is greater than " + val);
        break;
      } // end if
      priornode = currentnode;
      currentnode = currentnode.next;
    } // end while
    priornode.next = m_node;
    m_node.next = currentnode;
  }

  this.size++;
  //console.log("size is : " + this.size);

  return m_node;
} // end add



// ADDBACK
// ADDS THE NEW NODE TO THE BACK
// RETURNS NODE ADDED
/**
*@method addBack
*@param {object} val
*@return {none}
*/
linkedlist.prototype.addBack = function (val) {

  var m_node = new node(val);
  currentnode = this.first;

  if (this.first == null){
    this.first = m_node;
  }// end if

  else {

    while (currentnode.next){
      currentnode = currentnode.next;
    }
    currentnode.next = m_node;
  }// end else
  this.size++;
}

// SEARCH
// TAKES IN A VALUE TO SEARCH FOR AND SEES IF IT IS IN THE LIST
// RETURNS 0 IF VALUE IS NOT FOUND IN LIST, OTHERWISE RETURNS THE NODE
// WHEN USING SEARCH, SEE IF 0 IS RETURNED FOR IF IT IS FOUND
/**
*@method search
*@param {object} val
*@return {object} object if found, 0 else
*/
linkedlist.prototype.search = function (val) {

  var object = 0;  // varible used to retun value of node or 0

  if (this.first == null){
    console.log("null list");
  } // end if

  else {
    currentnode = this.first;

    while (currentnode != null){
      if (currentnode.equal(val)){
        object = currentnode;
        break;
      }//end if
      currentnode = currentnode.next;
    }// end while

  } // end else

  return object;
} // end search







// REMOVE
// DELETES A NODE FROM THE LIST
// TAKES IN THE VALUE TO SEARCH FOR
// RETURNS TRUE IF DELETED, FALSE ELSE
/**
*@method remove
*@param {object} val
*@return {bool} True if removed, false else
*/
linkedlist.prototype.remove = function(val) {

  var bool = false;
  var res = this.search(val);

  if (res === 0){
    console.log("object not in list");
  }
  else {
    currentnode = this.first;
    priornode = currentnode;
    position = 0;
    while(currentnode){

      if(currentnode.equal(val)){

        if (position == 0){
          this.first = this.first.next;
          currentnode = null;
          this.size--;
          bool = true;
          break;
        }// end if

        else{
          priornode.next = currentnode.next;
          console.log("deleting");
          currentnode = null;
          bool = true;
          this.size--;
          break;
        } // end else
      }// end if

      priornode = currentnode;
      currentnode = currentnode.next;
      position++;
    } // end while
  } // end else
  return bool;
} // end remove




// IS EMPTY
// Checks to see if list is empty
// returns true if it is, false else
/**
*@method isEmpty
*@param {none}
*@return {bool} True if empty, false else
*/
linkedlist.prototype.isEmpty = function() {
  if (this.size == 0){
    return true;
  }
  else {
    return false;
  }
}




//    PRINT ALL FUNCTION
// WHEN CALLED, PRINTS ALL THE VALUES OF THE LIST
/**
*@method printAll
*@param {none}
*@return {none}
*/
linkedlist.prototype.printAll = function(){
  currentnode = this.first;

  if (this.size == 0){
    console.log("empty list");
  }// end if

  else {
    while (currentnode){
      console.log(currentnode.data);
      currentnode = currentnode.next;
    }
  }
}



// REMOVE FRONT
// REMOVES FIRST VALUE FROM LIST
/**
*@method removeFront
*@param {none}
*@return {bool} true if removed, false else
*/
linkedlist.prototype.removeFront = function () {

  currentnode = this.first;
  if (!this.isEmpty()){
    this.first = this.first.next;
    currentnode = null;
    this.size--;
    return true;
  }
  else{
    return false;
  }
}


// return at
// returns node at the specified index
// Index ranges from 0 to size
/**
*@method returnAt
*@param {int} index
*@return {object} Node object if found, 0 else
*/
linkedlist.prototype.returnAt = function (index){


  if (this.isEmpty()){
    return null;
  }

  currentnode = this.first;
  for (var j = 0; j < this.size; j++){
    if (index == j){
      return currentnode;
    }
    currentnode = currentnode.next;
  }
}
//____________________________________________________________________________

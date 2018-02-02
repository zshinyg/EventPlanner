// linkedlist.js
//
// LinkedList consisting of type nodes
// adapted from https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392


//_________________________________________________________________________

// CONTAINS THE DATA TYPE NODE IN ORDER TO CONSTRUCTO A LINKED LIST
// ADAPTED FROM https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392

function node (data) {
  this.data = data;
  this.next = null;
}
//_________________________________________________________________________


function linkedlist() {

  // CONSTRUCTOR
  // TAKES NO PARAMETERS
  // SETS SIZE TO 0 AND FIRST TO NULL
    this.size = 0;
    this.first = null;
}




// ADD
// TAKES IN A VALUE TO SAVE IN THE NODE (IN OUR CASE AN ATTENDEE)
// THIS FUNCTION SORTS THE DATA FROM LEAST (FIRST VALUE)  TO GREATEST (LAST NODE)
//
linkedlist.prototype.add = function (val) {
  var m_node = new node(val);
  currentnode = this.first;

  // Check to see if the list is empty
  if (this.first == null)
  {
      this.first = m_node;
  } // end if

  else {
    priornode = this.first;
    currentnode = this.first.next;
    while (currentnode != null) {
      if (currentnode.data > val){
        break;
      } // end if
    } // end while
    priornode.next = m_node;
    m_node = currentnode;
  }

  this.size++;

  return m_node;
} // end add


// SEARCH
// TAKES IN A VALUE TO SEARCH FOR AND SEES IF IT IS IN THE LIST
// RETURNS 0 IF VALUE IS NOT FOUND IN LIST, OTHERWISE RETURNS THE NODE
// WHEN USING SEARCH, SEE IF 0 IS RETURNED FOR IF IT IS FOUND
linkedlist.prototype.search = function (val) {

  var object = 0;  // varible used to retun value of node or 0
  if (this.first == null){
    console.log("null list");
  } // end if

  else {
    currentnode = this.first;
    while (currentnode.next != null){
      if (currentnode.data === val){
        object = currentnode;
        break;
      }//end if
    }// end while
    if (currentnode.data === val){
      object = currentnode;
    }// end if
  } // end else

  return object;
} // end search







// REMOVE
// DELETES A NODE FROM THE LIST
// TAKES IN THE VALUE TO SEARCH FOR
// RETURNS TRUE IF DELETED, FALSE ELSE
linkedlist.prototype.remove = function(val) {

  var temp;   // variable to return true or false
  var searchval;
  console.log(this.first);
  searchval = linkedlist.prototype.search(val);
  console.log("value of search is: " + searchval);
  if (searchval === 0) {
    temp = false;
  } // end if

  else if (this.size == 1) {
    delete this.first;
    this.first = null;
    temp = true;
  } // end else if

  else {
    currentnode = this.first.next;
    priornode = this.first;

    while (currentnode.data != val)
    {
      priornode = currentnode;
      currentnode = currentnode.next;
    } // end while

    priornode.next = currentnode.next;
    delete currentnode;

    temp = true;
  } // end else

  if (temp == true) {
    this.size--;
  }
  return temp;
} // end remove

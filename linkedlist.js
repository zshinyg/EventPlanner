// linkedlist.js
//
// LinkedList consisting of type nodes
// adapted from https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392

//              NODE FUCNTIONS
//_________________________________________________________________________

// CONTAINS THE DATA TYPE NODE IN ORDER TO CONSTRUCTO A LINKED LIST
// ADAPTED FROM https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392

function node (data) {
  this.data = data;
  this.next = null;
}

// GREATER
// RETURNS TRUE IF THE CURRENT NODE'S DATA IS LARGER THAN THE INPUT DATA
// FLASE OTHERWISE
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
node.prototype.equal = function (data){
  val = false;

  if (this.data === data){
    val = true;
  }
  return val;
}





//              LINKED LIST FUNCTIONS
//_________________________________________________________________________


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
  } // end else if

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





//    PRINT ALL FUNCTION
// WHEN CALLED, PRINTS ALL THE VALUES OF THE LIST
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



//____________________________________________________________________________

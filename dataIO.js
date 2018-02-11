// WRITE DATA.JS




// FUNCTION WRITE writeData
// FORM: writeData(array to save, number of offset, name)
// Parameters to pass in:
//    array: values to store are saved in with an offset
//    offset: # of values saved per item
//    name: name of value
//
//  EXAMPLE:
//    Say I want to store the attendees of an event in
//    an event.  If the event name is Birthday, the attendee's look like this:
//    last name, first name
//    Smith, John
//    Foo, Bill
//    Jimmy, Gill
//
//  The array should look like this:
//  arr =[Smith, John, Foo, Bill, Jimmy, Gill]
//
//  num will be equal to 2 here for the number of items per attendee
//
//   This function will save it as so
//   Smith@John Foo@Bill Jimmy@Gill

function writeData(arr, num, name) {

  var line = '';
  var doc = '';
  //console.log("before for loop");
  //console.log(arr.length);
  //console.log("num: " + num);

  for (var i = 0; i < arr.length; i+=num){

    //console.log("i: "+ i + '\n');
    line = '';
    for(var j = 0; j < num; j++){

      //console.log("j: " + j + '\n');

      if (j == num-1){
        line += arr[i+j];
        //console.log("inside if of j");
      } // end if

      else {
        line += arr[i+j] + '@';
        //console.log("inside else of j");
      } // end else
    } // end for j
    doc += line + ' ';
  } // end for i

  console.log(doc);
  localStorage.setItem(name, doc);
}



// FUNCTION readData
//
//   readData(name)
//
//  TAKES IN A NAME OF A DATA STRUCTURE TO READ IN
//  TAKES FROM localStorage
// IF FILE NON EXISTENT, PRINT TO CONOSLE AND RETURN null
// RETURNS AN ARRAY STUCTURED AS SO
//
//  array(data1, data1.1, data1.2..., data2, data2.1,...)
//
// BASED ON READ FILE FORMAT AS
//  data1@data1.1@data1.2... data2@data2.1...
//  SEE HOW THE writeData FUNCTION ABOVE WRITES FOR A MORE
//   DETAILED DESCRIPTION

function readData(name){

  var doc = localStorage.getItem(name);
  if (doc == null){

    console.log("file " + name + " not found");
    return 0;
  }// end if

  //console.log(doc);
  var line = '';
  var elements = 0;
  var arr = new Array;

  // Go through each index of the string
  for (var i = 0; i < doc.length; i++){

    // If the value is ' ' or '@' skip it and add that new element to arr
    if (doc[i] == ' '){
      arr[elements] = line;
      line = '';
      elements++;
      //console.log("equal space");
    }// ene if

    else if (doc[i] == '@'){
      //console.log("equal @");
      arr[elements] = line;
      line = '';
      elements++;
    } // end else if
    else{
      line += doc[i];
    }// end else
  } // end for
  //console.log(arr);
  return arr;
}


function readEventData(name){

  var doc = localStorage.getItem(name);
  if (doc == null){

        console.log("file " + name + " not found");
        return 0;
  }

  var line = '';
  var elements = 0;
  var arr = new Array;

  for (var i = 0; i < doc.length; i++){
    var j = 0;
    while(j<2){
      if(doc[i] == '@'){
        arr[elements] = line;
        line ='';
        elements++
        j++;
        i++;
      }
      line += doc[i];
      i++;

    }// end while j<2

    while(doc[i] != ' '){
      line += doc[i];
      i++;
    }
    arr[elements] = line;
    elements++;
    line = '';
  }

  return arr;
}



// Event to array
// takes in a list of events and changes it to an array
// Since the list is passed by value, removing the first value won't destroy
// the master list
function eventArray (list){

  var arr = new Array;
  //console.log(list.isEmpty());
  //console.log(list.size);

  var ind = 0;
  for (var i = 0; i < list.size; i++){
    currentnode = list.returnAt(i);
    arr[ind] = currentnode.data.title;
    arr[ind+1] = currentnode.data.date;
    arr[ind+2] = currentnode.data.len;
    ind+=3;
  }

  return arr;
}



// User to array
// takes in a list of users and changes it to array

function userArray (list){

  var arr = new Array;
  var ind = 0;
  for (var i = 0; i < list.size; i++){
    currentnode = list.returnAt(i);
    arr[ind] = currentnode.data.lastName;
    arr[ind+1] = currentnode.data.firstName;
    ind+=2;
  }
  return arr;
}


// WHEN AT HOME PAGE, THIS FUNCTION WILL READ IN ALL DATA AND
// POPULATE LISTS
//


function populateEvent() {

  var mE = readEventData("masterEvent");

  if (mE[0] == ''){
    var arr = new Array;
    writeData(arr, 0, "masterEvent");
  }


  // For master event, create a list of all events
  for (var i = 0; i < mE.length; i+=3){
    var title = mE[i];
    var date = mE[i+1];
    var length = mE[i+2];
    var temp = new meeting(title, date, length);
    window.masterEvent.add(temp);
  } // end for i

}



function populateUser() {

  var mU = readData("masterUser");
  if (mU[0] == null) {
    var arr = new Array;
    writeData(arr, 0, "masterUser");
  }

  // For master user, create list of all users
  for (var i = 0; i < mU.length; i+=2){
    var lastName = mU[i];
    var firstName = mU[i+1];
    var person = new attendee(lastName, firstName);
    window.masterUser.add(attendee);
  }
  //window.masterUser.printAll();
}

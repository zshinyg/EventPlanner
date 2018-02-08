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




// Event to array
// takes in a list of events and changes it to an array
// Since the list is passed by value, removing the first value won't destroy
// the master list
function eventArray (list){

  var arr = new Array;
  for (var i = 0; i <= (list.size * 3); i+=3){
    arr[i] = list.first.title;
    arr[i+1] = list.first.date;
    arr[i+2] = list.first.len;
    list.removeFirst();
  }
  return arr;
}

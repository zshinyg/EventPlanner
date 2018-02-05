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




function readData(name){

  var doc = localStorage.getItem(name);
  if (doc == null){

    console.log("file " + name + " not found");
    return 0;
  }// end if

  console.log(doc);
  var elements = 0;
  var arr = new Array;

  for (var i = 0; i < doc.length; i++){
    if (doc[i] == ' '){
      elements++;
      console.log("equal space");
    }
    else if (doc[i] == '@'){
      console.log("equal @");
      elements++;
    }
    else{
      arr[elements] += doc[i];
    }
  }
  console.log(arr);
}

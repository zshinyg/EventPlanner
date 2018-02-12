/**
 * Adds a row to the table on user_availabilty.html. This will
 * be used to add the given events to the table.
 */
var lastName = '';
var firstName = '';

function setName(){
  var name = sessionStorage.getItem("userName");
  var i = 0;
  while (name[i] != ' '){
      firstName += name[i];
      i++;
  }
  i++;
  while (i < name.length){
    lastName += name[i];
    i++;
  } // end while
    //console.log("this is the name now: " + window.firstName  + ' ' + window.lastName);
}

function addRow(title, date, time) {

    var table = document.getElementById("eventTable")

    tr = document.createElement('tr');
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));

    var checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";

    tr.cells[0].appendChild(document.createTextNode(title));
    tr.cells[1].appendChild(document.createTextNode(date));
    tr.cells[2].appendChild( document.createTextNode(time) );
    tr.cells[3].appendChild(checkbox);

    table.appendChild(tr);

}




function loadEvents(){

  var month = '';
  var year = '';
  var day = '';
  var date = '';
  var startHours ='';
  var startMin = '';
  var endHours = '';
  var endMin = '';
  var timeString = '';
  for (var i = 0; i < masterEvent.size; i++){
    var node = masterEvent.returnAt(i);
    date = node.data.date;
    month = date.getMonth() + 1;
    year = date.getFullYear();
    day = date.getDate();
    startHours = date.getHours();
    startMin = date.getMinutes();
    endHours = Math.floor((node.data.len)/60) + startHours;
    endMin = (node.data.len)%60;
    timeString = startHours + ':' + startMin + ' to ' + endHours + ':' + endMin;
    addRow(node.data.title, month+'/'+day+'/'+year,timeString);
  }
  if (masterEvent.size == 0){
    document.getElementById("list").innerHTML = "No events at this time";
  }


  // Check to see what events the user is going to
  var checkBoxArray = document.getElementById("eventTable").getElementsByTagName("INPUT");

  for (var i = 0; i < masterEvent.size; i++){

    var node = masterEvent.returnAt(i);
    var eventTitle = node.data.title;
    window[eventTitle] = populateUser(eventTitle);
    var attending = window[eventTitle].search(lastName);

    // console.log("print ALL in load users");
    // window[eventTitle].printAll();


    // console.log("Searching for: " + lastName + " in " + eventTitle);
    // console.log("attending = " + attending);
    if (attending){
      checkBoxArray[i].checked = true;
    }
  }
}



function submit(){

  //console.log("inside submit");
  var checkBoxArray = document.getElementById("eventTable").getElementsByTagName("INPUT");
  var itemArray = document.getElementById("eventTable").getElementsByTagName("td");
  var nameArray = new Array;
  for (var i = 0; i < itemArray.length; i+=4){
    nameArray[i/4] = itemArray[i];
  }
//  console.log(checkBoxArray);
//  console.log(nameArray);
// Here we keep track of which events had a check by there name
// Next thing to do is write to file (filename being that event)
// that the person who is logged in is attending
  for (var i = 0; i < checkBoxArray.length; i++){
    if (checkBoxArray[i].checked == true){

      // Populate the list of that event
      var eventTitle = nameArray[i].textContent;
      var list = populateUser(eventTitle);
      var attending = list.search(window.lastName);
      if(attending != 0){
        console.log("already in " + eventTitle);
      }

      else {
      // create a new attendee with the user logged in
      var person = new attendee(window.lastName, window.firstName);
      // add the person to the list
      list.add(person);
      // write the list to file
      var tempArr = userArray(list);
      writeData(tempArr, 2, eventTitle);
    }
    }
  }
}

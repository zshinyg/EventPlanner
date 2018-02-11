/**
 * Adds a row to the table on user_availabilty.html. This will
 * be used to add the given events to the table.
 */
var lastName = '';
var firstName = '';

function setName(last, first){
  window.lastName = last;
  window.firstName = first;
  //console.log(lastName + ' ' + firstName);
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
  for (var i = 0; i < checkBoxArray.length; i++){
    if (checkBoxArray[i].checked == true){
      console.log("found a check");
      console.log(nameArray[i].textContent);

    }
  }
}

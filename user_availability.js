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

function findMaxYear(){

  var obj = masterEvent.returnAt(masterEvent.size - 1);
  console.log(obj);
  var date = new Date(obj.data.date);
  console.log(date);
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

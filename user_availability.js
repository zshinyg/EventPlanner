/**
 * Adds a row to the table on user_availabilty.html. This will
 * be used to add the given events to the table.
 */
function addRow() {

    var table = document.getElementById("eventTable")

    tr = document.createElement('tr');
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));

    var checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";

    tr.cells[0].appendChild(document.createTextNode('Meeting'));
    tr.cells[1].appendChild(document.createTextNode('2/7/18'));
    tr.cells[2].appendChild( document.createTextNode('10:20 AM - 11:00 PM') );
    tr.cells[3].appendChild(checkbox);

    table.appendChild(tr);

}

function submitName()  {
    var firstName = document.getElementById("userFirstName").value;
    var lastName = document.getElementById("userLastName").value;

    populateUser();
    var person = new attendee(lastName,firstName);
    masterUser.add(person);
    var arr = userArray(masterUser);
    writeData(arr, 2, "masterUser");

    populateUserSelect("userName");


}


function populateUserSelect() {

    function populateUserSelect(id) {

        for(var i = 0; i <= masterUser.size; i++){
            var docfrag = document.createDocumentFragment();
    
        
            docfrag.appendChild(new Option(i, i));
            

            var select = document.getElementById(id);
            select.appendChild(docfrag);
        }

    }
}
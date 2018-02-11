// USER.JS
//
// JavaScirpt file that accompanies user.html
//
// Has the user select from a drop down menu of people
// If their name is not listed, user has the option to add their name
// Clicks continue to move on to add availability

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

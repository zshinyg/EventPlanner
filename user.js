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

    console.log("second print all");
    masterUser.printAll();
    var person = new attendee(lastName,firstName);
    masterUser.add(person);
    var arr = userArray(masterUser);
    writeData(arr, 2, "masterUser");

    populateUserSelect("userName");


}

function populateUserSelect(id) {

    window.masterUser = populateUser("masterUser");
    unpopulateNames();
    var docfrag = document.createDocumentFragment();
    console.log("before the loop");
    window.masterUser.printAll();
      for(var i = 0; i < masterUser.size; i++){

          //Get the node at index i from masterUser

          var node = masterUser.returnAt(i);
          var name = node.data.firstName  + ' ' + node.data.lastName;
          //console.log(name);

          docfrag.appendChild(new Option(name));


      }


  var select = document.getElementById(id);
  select.appendChild(docfrag);

}


function unpopulateNames(){

    var names = document.getElementById("userName");

    for( var i = 0; i < masterUser.size; i++){
        names.remove(names.i);
    }

}


function addAvailability(){

  var name = document.getElementById("userName").value;
  sessionStorage.setItem("userName", name);

}

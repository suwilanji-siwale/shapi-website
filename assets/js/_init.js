var db = firebase.firestore();

function join() {

   var name = document.getElementById("name").value;
   var phone = document.getElementById("phone").value;
   var email = document.getElementById("email").value;

   if (name.length <=0 || phone.length <=0 || email.length <=0){

    //alert("Please enter all the fields");
    document.getElementById("warning").style.display = "block";
    return false;

   }

   else{

    document.getElementById("warning").style.display = "none";
    document.getElementById("joining").innerHTML = ("Please wait...");
  

  db.collection("users").add({
    name: name,
    phone: phone,
    email: email
})


.then((docRef) => {
    //console log
    console.log("Document written with ID: ", docRef.id);

    document.getElementById("msg").style.display = "block";
    document.getElementById("waiting-form").reset();
    var achorJoin = document.getElementById("joining");
    achorJoin.innerHTML=("Join Waiting List");
    achorJoin.style.pointerEvents = 'none';

   
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
     
   }  


}


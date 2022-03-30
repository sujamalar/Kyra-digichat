const firebaseConfig = {
    apiKey: "AIzaSyBgd28WGpxAK6JKVXqcrQ8M_M6NcFpT-Z0",
    authDomain: "digichat-ff0ad.firebaseapp.com",
    databaseURL: "https://digichat-ff0ad-default-rtdb.firebaseio.com",
    projectId: "digichat-ff0ad",
    storageBucket: "digichat-ff0ad.appspot.com",
    messagingSenderId: "1045389185893",
    appId: "1:1045389185893:web:7cc4fee4fb4ac8a5f7478c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username=localStorage.getItem("username");
  document.getElementById("username").innerHTML="Welcome "+username+" !";

  function addroom(){
      room_name=document.getElementById("add_room").value;
      localStorage.setItem("room", room_name);

      firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
      });
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
    console.log("room name"+Room_names);
    row="<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
   //End code
   });});}
getData();
function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("room", name);
 window.location="kwitter_page.html";
}
  function log_out(){

    localStorage.removeItem("username");
    localStorage.removeItem("room");
    window.location="index.html";
}
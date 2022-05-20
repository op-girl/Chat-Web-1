// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDxZwd_YUnZ96G8V3tqoPsiJ9MWkp7zCwo",
    authDomain: "chat-web-af703.firebaseapp.com",
    databaseURL: "https://chat-web-af703-default-rtdb.firebaseio.com",
    projectId: "chat-web-af703",
    storageBucket: "chat-web-af703.appspot.com",
    messagingSenderId: "784619744395",
    appId: "1:784619744395:web:7c7020ce108c1aa2a3b88e",
    measurementId: "G-B8FFBDRR0N"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}




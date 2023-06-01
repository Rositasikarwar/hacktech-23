const firebaseConfig = {
    apiKey: "AIzaSyDWvK7XbNqKYwxOzTWAIcu8gaZxwI6k9YI",
    authDomain: "doc-chat-c18dd.firebaseapp.com",
    databaseURL: "https://doc-chat-c18dd-default-rtdb.firebaseio.com",
    projectId: "doc-chat-c18dd",
    storageBucket: "doc-chat-c18dd.appspot.com",
    messagingSenderId: "1005090727790",
    appId: "1:1005090727790:web:9465d77b6de22ffab0037f"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  
  // Refernece contactInfo collections
  
  const auth = firebase.auth();
  
  // Sign In Automatically
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // var uid = user.uid;
      location.replace("login.html");
    }
  });
  
  document
    .getElementById("sign_up_user_button")
    .addEventListener("click", function () {
      var input_password = document.getElementById("input_password").value;
      var input_email = document.getElementById("input_email").value;
  
      firebase
        .auth()
        .createUserWithEmailAndPassword(input_email, input_password)
        .then((userCredential) => {
          // Signed in
          // var user = userCredential.user;

          alert("Done");
  
          location.replace("login.html");
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
          // ..
        });
    });
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
  const auth = firebase.auth();
  
  // Sign In Automatically
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // var uid = user.uid;
      location.replace("services.html");
    }
  });
  
  
  document
    .getElementById("sign_in_user_button")
    .addEventListener("click", function () {
      var input_password = document.getElementById("input_email_password").value;
      var input_email = document.getElementById("input_email_login").value;
  
  
      firebase
        .auth()
        .signInWithEmailAndPassword(input_email, input_password)
        .then(function (firebaseUser) {
          // Success
          location.replace("services.html");
        })
        .catch(function (error) {
          // Error Handling
        });
    });
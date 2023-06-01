
var firebaseConfig = {
    apiKey: "AIzaSyDWvK7XbNqKYwxOzTWAIcu8gaZxwI6k9YI",
authDomain: "doc-chat-c18dd.firebaseapp.com",
databaseURL: "https://doc-chat-c18dd-default-rtdb.firebaseio.com",
projectId: "doc-chat-c18dd",
storageBucket: "doc-chat-c18dd.appspot.com",
messagingSenderId: "1005090727790",
appId: "1:1005090727790:web:9465d77b6de22ffab0037f"
  };

  firebase.initializeApp(firebaseConfig);


  var tempAmit="A";

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
       tempAmit = user.uid;

       var messagesRe = firebase.database()
       .ref(tempAmit);

       // Listen for new messages and update the chatbox
       messagesRe.on('child_added', function(snapshot) {
       var message = snapshot.val();
       var chatbox = document.getElementById('chatbox');
       chatbox.innerHTML += '<p><strong>' + message.name + ':</strong> <br>' + message.email + '</p>';
       chatbox.scrollTop = chatbox.scrollHeight;
});
       
    }
  });



      


  


   
  document.getElementById('contactForm')
      .addEventListener('submit', submitForm);

  function submitForm(e) {
      e.preventDefault();

      var auth = firebase.auth();

      // Get the currently signed-in user
      var user = auth.currentUser;


      var messagesRef = firebase.database()
       .ref(user.uid);
      




      // Get values
      var name = getInputVal('name');

      saveMessage(user.email.substring(0,8), name, messagesRef);
      document.getElementById('contactForm').reset();
  }

  // Function to get form values
  function getInputVal(id) {
      return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(name, email, messagesRef) {
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
          name: name,
          email: email,
      });
  }

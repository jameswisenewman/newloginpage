const firebaseConfig = {
    apiKey: "AIzaSyBFyf7D82xfYTBZSQdfzbhN5vvPTi9tjDI",
    authDomain: "contactform-50800.firebaseapp.com",
    databaseURL: "https://contactform-50800-default-rtdb.firebaseio.com",
    projectId: "contactform-50800",
    storageBucket: "contactform-50800.appspot.com",
    messagingSenderId: "378616383394",
    appId: "1:378616383394:web:5a4fd161e33243354d54fb",
    measurementId: "G-50GH5GTM0E"
  };

  firebase.initializeApp(firebaseConfig);

  var ContactfromDB = firebase.database().ref('contactform');
  document.getElementById("contactform").addEventListener("submit", submitForm);

   function submitForm(e){
       e.preventDefault();

       var name = getElementVal("name");
       var email = getElementVal("email");
       var msgContent =getElementVal("message");
       
       saveMessage( name, email, msgContent);
      
   } 

   const saveMessage =(name,email,message)=>{
     var newContactform = ContactfromDB.push();

     newContactform.set({
        name : name,
        emailid : email,
        msgContent : message,
     });
   };

   const getElementVal =(id) => {
    return document.getElementById(id).value;

   };


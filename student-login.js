 // Import the functions you need from the SDKs you need
 import { initializeApp,   getAuth,
    signInWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAiLv6khTCuI9bh0YlZI-HFhVwTpS1rP34",
   authDomain: "student-teacher-appointm-580f7.firebaseapp.com",
   databaseURL: "https://student-teacher-appointm-580f7-default-rtdb.firebaseio.com",
   projectId: "student-teacher-appointm-580f7",
   storageBucket: "student-teacher-appointm-580f7.appspot.com",
   messagingSenderId: "32096263208",
   appId: "1:32096263208:web:faf973517938f2e2b6691d"
 };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    const auth = getAuth();

  document.getElementById('slogin').addEventListener('submit' , login);
  var email = getElementById("email");
  var password = getElementById("password");


  function login(e){
    e.preventDefault();

    var obj = {
        email: email.value,
        password: password.value,
      };
       
          signInWithEmailAndPassword(auth, obj.email, obj.password)
  .then((success) => {

      window.location.replace('student.html')
   
  })
  console.log(obj);

  }


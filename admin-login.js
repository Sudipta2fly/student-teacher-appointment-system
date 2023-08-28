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
  firebase.initializeApp(firebaseConfig);
    const auth = getAuth();

  document.getElementById('alogin').addEventListener('submit' , login);

  function login(e){
    e.preventDefault();

        var email = getElementById(email).value;
        var password = getElementById(password).value;

       
          signInWithEmailAndPassword(auth, email, password)
  .then((success) => {

      window.location.replace('admin.html')
   
  })

  }
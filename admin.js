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

  var teacher = firebase.database().ref('teacher');

  document.getElementById('add-teacher').addEventListener('submit' , submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var dept = getInputVal('dept');
    var subject = getInputVal('subject');
    var email = getInputVal('email');
    var password = getInputVal('password');

    addTeacher(name, dept, subject, email, password);

    // document.querySelector('.alert').style.display = 'block';

    // setTimeout(function(){
    // document.querySelector('.alert').style.display = 'none';

    // },2000);

    document.getElementById('add-teacher').reset();

  }



  function getInputVal(id){
    return document.getElementById(id).value;
  }

    function addTeacher(name, dept, subject, email, password){
    var newTeacher = teacher.push();
    newTeacher.set(
        {
            name: name,
            dept: dept,
            subject: subject,
            email: email,
            password: password
        }
    );
  }
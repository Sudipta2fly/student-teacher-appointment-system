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

  var appointment = firebase.database().ref('appointment');

  document.getElementById('appointment').addEventListener('submit' , submitForm);

  function submitForm(e){
    e.preventDefault();

    var teacher_name = getInputVal('teacher_name');
    var subject = getInputVal('subject');
    var date = getInputVal('date');
    var time = getInputVal('time');
    var student_name = getInputVal('student_name');


    bookAppoinment(teacher_name, subject, date, time, student_name);

    document.querySelector('.appointment-alert').style.display = 'block';

    setTimeout(function(){
    document.querySelector('.appointment-alert').style.display = 'none';

    },2000);

    document.getElementById('appointment').reset();

  }



  function getInputVal(id){
    return document.getElementById(id).value;
  }



  function bookAppoinment(teacher_name, subject, date, time, student_name){
    var newAppointment = appointment.push();
    newAppointment.set(
        {
            teacher_name: teacher_name,
            subject: subject,
            date: date,
            time: time,
            student_name: student_name

        }
    );
  }


  // for message

  var message = firebase.database().ref('student_message');

  document.getElementById('message').addEventListener('submit' , sendMessage);

  function sendMessage(e){
    e.preventDefault();

    var teacher_name = getInputVal('teacher_name');
    var msg = getInputVal('msg');
    var student_name = getInputVal('student_name');


    sendMsg(teacher_name, msg, student_name);

   document.querySelector('.message-alert').style.display = 'block';

    setTimeout(function(){
    document.querySelector('.message-alert').style.display = 'none';

    },2000);

    document.getElementById('message').reset();

  }



  function getInputVal(id){
    return document.getElementById(id).value;
  }



  function sendMsg(teacher_name, msg, student_name){
    var newMessage = message.push();
    newMessage.set(
        {
            teacher_name: teacher_name,
            msg: msg,
            student_name: student_name

        }
    );
  }
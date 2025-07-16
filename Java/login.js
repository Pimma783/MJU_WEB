function Login(event) {
  event.preventDefault(); 

  const userType = document.getElementById('userType').value;

  if (userType === 'student') {
    window.location.href = './student/index.html  ';
  } else if (userType === 'teacher') {
    window.location.href = './teacher/index.html';
  } else {
    alert('กรุณาเลือกประเภทผู้ใช้');
  }
}
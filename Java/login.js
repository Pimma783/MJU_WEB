function Login(event) {
  event.preventDefault(); // ป้องกันฟอร์มไม่ให้รีเฟรช

  // ดึงค่าจาก input
  const userType = document.getElementById("userType").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // ตรวจสอบว่ากรอกข้อมูลครบมั้ย???????????
  if (!userType || !email || !password) {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    return false;
  }

  // ถ้าตรวจสอบสำเร็จ ก็ redirect ไปหน้าอื่นได้เลย
  if (userType === "student") {
    window.location.href = "./student/index_stu.html"; 
  } else if (userType === "teacher") {
    window.location.href = "./teacherpage/index_teac.html"; 
  }

  return false;
}

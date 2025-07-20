document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  // เมื่อคลิก hamburger ให้แสดง/ซ่อนเมนูมือถือ
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});
// ฟังก์ชัน Logout แบบยืนยัน
function logoutConfirm() {
  const confirmLogout = confirm("คุณต้องการออกจากระบบหรือไม่?");
  if (confirmLogout) {
    window.location.href = "../index.html";
  }
}

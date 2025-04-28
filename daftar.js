// Toggle Tampilkan Kata Sandi
function togglePassword() {
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm-password");
  const type = password.type === "password" ? "text" : "password";
  password.type = type;
  confirm.type = type;
}

// Redirect ke halaman masuk saat tombol "Masuk" diklik
document.addEventListener("DOMContentLoaded", () => {
  const masukTab = document.querySelector(".auth-toggle button:not(.active)");
  if (masukTab) {
    masukTab.addEventListener("click", () => {
      window.location.href = "halmasuk.html";
    });
  }
});

// Show/Hide password
const checkbox = document.getElementById("show-password");
const passwordInput = document.getElementById("password");

checkbox.addEventListener("change", () => {
  passwordInput.type = checkbox.checked ? "text" : "password";
});

// Redirect ke halaman daftar saat tombol tab "Daftar" diklik
const daftarTab = document.querySelector(".tab:not(.active)");
daftarTab.addEventListener("click", () => {
  window.location.href = "haldaftar.html";
});

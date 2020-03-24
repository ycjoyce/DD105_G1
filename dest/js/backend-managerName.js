$(".adminName").text(sessionStorage.getItem("managerName") + " 您好");
if (sessionStorage.getItem("managerNo") == null) {
  window.location.href = "backend-login.html";
}

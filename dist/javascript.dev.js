"use strict";

var a = 0;

function myfunction() {
  if (a % 2 == 0) {
    document.getElementById("logincard").style.display = "block";
    a++;
  } else {
    document.getElementById("profile").style.display = "none";
    document.getElementById("login").innerHTML = "LOGIN";
    alert("Logout Successfully");
    document.querySelector(".text").value = "";
    document.querySelector(".password").value = "";
    document.getElementById('frame1').setAttribute("src", "./home.html");
    a++;
  }

  event.preventDefault();
}

function myfunction1() {
  if (document.querySelector(".text").value == "" && document.querySelector(".password").value == "") {
    alert("Enter Username and Password");
  } else if (document.querySelector(".text").value == "") {
    alert("Enter Username");
  } else if (document.querySelector(".password").value == "") {
    alert("Enter Password");
  } else {
    document.getElementById("logincard").style.display = "none";
    document.getElementById("profile").style.display = "block";
    document.getElementById("login").innerHTML = "LOGOUT";
    alert("Login Successfully");
    document.querySelector(".text").value = document.querySelector(".username").value;
  }
}

function sidebar() {
  document.getElementById('chk').checked = false;
}

function review() {
  alert("Review Submit Successfully");
  location.reload();
}
//# sourceMappingURL=javascript.dev.js.map

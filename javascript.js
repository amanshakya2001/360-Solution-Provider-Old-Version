var a = 0;
var username = "";
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
    document.querySelector(".text").style.border = "0";
    document.querySelector(".password").style.border = "0";
    document.getElementById("frame1").setAttribute("src", "./home.html");
    a++;
  }
  event.preventDefault();
}
function myfunction1() 
{
  if (document.querySelector(".text").value == "" &&
    document.querySelector(".password").value == "") 
  {
    alert("Enter Username and Password");
    document.querySelector(".text").style.border = "2px solid red";
    document.querySelector(".password").style.border = "2px solid red";
  } 
  else if (document.querySelector(".text").value == "") 
  {
    alert("Enter Username");
    document.querySelector(".text").style.border = "2px solid red";
    document.querySelector(".password").style.border = "2px solid green";
  }
  else if (document.querySelector(".text").value !="vikas gola" && document.querySelector(".text").value !="tarun gupta" &&document.querySelector(".text").value !="aman shakya" &&document.querySelector(".text").value !="taruwarsh kumar"&&document.querySelector(".text").value !="animesh dixit"&&document.querySelector(".text").value !="astha verma" )
  {
    alert("Not a Valid User");
  }
  else if (document.querySelector(".password").value == "") 
  {
    alert("Enter Password");
    document.querySelector(".text").style.border = "2px solid green";
    document.querySelector(".password").style.border = "2px solid red";
  } else 
  {
    document.getElementById("logincard").style.display = "none";
    document.getElementById("profile").style.display = "block";
    document.getElementById("login").innerHTML = "LOGOUT";
    alert("Login Successfully");
    username = document.querySelector("#username").value;
    localStorage.setItem("username",username);
  }
}
function sidebar() 
{
  document.getElementById("chk").checked = false;
}
function review() 
{
  alert("Review Submit Successfully");
  location.reload();
}
function signup()
{
  document.querySelector(".signupcard").style.display = "block";
}
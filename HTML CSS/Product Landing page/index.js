if (typeof(Storage) !== "undefined") {
  // Code for localStorage/sessionStorage.
  if (localStorage.getItem("user") != "") {
    document.getElementById("login").style.display = "none";
    document.getElementById("loggedInUser").innerHTML = localStorage.getItem("user");
    document.getElementById("welcome").style.display = "none";
  }
} else {
  // Sorry! No Web Storage support..
}


function login() {
  var user = prompt("Enter Username");
  var pass = prompt("Enter Password");
  alert("Success");
  loginUser(user);
  return false;
}

function loginUser(user) {
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    localStorage.setItem("user", user);
    document.getElementById("login").style.display = "none";
    document.getElementById("loggedInUser").innerHTML = user;
    document.getElementById("pwel").style.opacity = 1;
    document.getElementById("welcome").style.display = "block";
  } else {
    // Sorry! No Web Storage support..
  }
}

function logoutUser() {
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    localStorage.setItem("user", "");
    document.getElementById("login").style.display = "block";
    document.getElementById("loggedInUser").innerHTML = "";
    document.getElementById("welcome").style.display = "none";
  } else {
    // Sorry! No Web Storage support..
  }
}

const p = document.getElementById('login-div')

function login() {
  p.innerHTML = "logged in"
}
function logout() {
  p.innerHTML = "logged out"
}

login();

p.onclick = function() {alert('asd222')};

// alert('asd')

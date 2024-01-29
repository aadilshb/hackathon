
function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  

    if (username === "user" && password === "password") {
  
      window.location.href = 'ecomm.html';
    } else {
  
      document.getElementById('login-message').textContent = "Invalid username or password.";
    }
  }
  
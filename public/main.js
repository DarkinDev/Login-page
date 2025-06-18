// Handle login form submission
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  console.log(true);
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Send login request to server
  fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "Login successful") {
        alert("Login successful!");
        window.location.href = "/"; // Redirect to home
      } else {
        alert(data.message);
      }
    })
    .catch((error) => console.log("Error:", error));
});

// Handle signup form submission
document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Send signup request to server
  fetch("http://localhost:5000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "User created successfully") {
        alert("Signup successful!");
        window.location.href = "/"; // Redirect to login page
      } else {
        alert(data.message);
      }
    })
    .catch((error) => console.log("Error:", error));
});

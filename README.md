             Student Management System HTML:
            
            Login website:
            
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Management</title>
    <link rel="stylesheet" href="student management.css">
</head>
<body>
     
<header>
<img src="C:\Users\user\Downloads\ChatGPT Image Jul 19, 2026, 01_42_05 PM.png" alt="Logo" class="logo" width="250" height="200">
    

 


</header>






    <div class="login-box">
        <h2>Login</h2>
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <span class="toggle-password" id="togglePassword" onclick="togglePasswordVisibility()">Show Password</span>
        <button onclick="login()">Login</button>
        <p class="message" id="message"></p>
        <p class="register-link">Don't have an account? <a href="register.html">Register</a></p>
    </div>


    <script src="student management.js"></script>
</body>
</html>

           Registration website:

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Student Management</title>
        <link rel="stylesheet" href="student management.css">
        </head>
        <body>

<div class="container">
    <h2>Student Registration</h2>

    <form>
        <input type="text" placeholder="Full Name" required>

        <input type="email" placeholder="Email" required>

        <input type="text" placeholder="Student ID" required>

        <input type="text" placeholder="Department" required>

        <input type="password" placeholder="Password" required>

        <input type="password" placeholder="Confirm Password" required>

        <button type="submit">Register</button>
    </form>

    <p>Already have an account?
        <a href="student management.html">Login</a>
    </p>
</div>

</body>
</html>



           Student Management System CSS:

body{
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

}



.login-box{
    background-color: #ffffff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, green, 0, 0.1);
    width: 300px;
    text-align: center;

}

.login-box h2{
    margin-bottom: 20px;
    font-size: 40px;
    font-family:'Times New Roman',Times,serif;
    
}
.login-box input{
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    margin: 10px 0;

}

.login-box button{
    width: 40%;
    padding: 10px;
    background:#007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
    font-size: 14px;
}

.login-box button:hover{
    background:#0056b3;
}

.message{
    margin: 15px 0 0;
    color:red; 
    font-size: 14px;
}
.register-link{
    margin-top: 10px;
    font-size: 14px;
}
.toggle-password {
    display: block;
    margin-top: 10px;
    font-size: 12px;
    color: #007bff;
    cursor: pointer;
}   


body{
    margin:0;
    font-family:Arial;
    background:#f0f2f5;
}

.container{
    width:350px;
    margin:50px auto;
    background:white;
    padding:20px;
    border-radius:10px;
    box-shadow:0 0 10px gray;
}

h2{
    text-align:center;
    color:#0d6efd;
}

input{
    width:100%;
    padding:10px;
    margin:10px 0;
    border:1px solid #ccc;
    border-radius:5px;
}

button{
    width:100%;
    padding:10px;
    background:#0d6efd;
    color:white;
    border:none;
    border-radius:5px;
    cursor:pointer;
}

button:hover{
    background:#0056b3;
}

p{
    text-align:center;
}

body{
    margin:0;
    font-family:Arial, sans-serif;
    background: url("C:/Users/user/Downloads/wVSIajhPlfZxS_DMlbu6y1LOJvhUEK5tdtkvZDuzNv1Fro3-nOGHk2gnVRQ7vlUhQD5s2Ia9EOT-Wr8zwVL3zoovA6ozNknwSlO-qlCG0n_tpPeOHHBQAs0-W3dLYggCh3QLTvNan0V0K64Qu6WPX7vpoeLSTyq0i09gq2j2S-U.jpeg") no-repeat center center fixed;
    background-size: cover;
}



          Student Management System JS:

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === "admin" && password === "password") {
        message.style.color = "green";
        message.textContent = "Login successful!";
    }
    else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
}

function togglePasswordVisibility() {
    let passwordInput = document.getElementById("password");
    let togglePassword = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "Hide Password";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Show Password";
    }

}




                








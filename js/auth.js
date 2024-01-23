const token = localStorage.getItem('token');

if (token && token != "undefined") {
    window.location.href = "../todo.html";
}

// Register
const registerURL = "https://todo-for-n92.cyclic.app/user/register";
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let username = e.target[0].value;
    let password = e.target[1].value;

    try {
        const response = await fetch(registerURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        
        if (response.status == 400) {
            alert("User ro'yxatdan o'tgan!")
        }
        if (!response.ok) {
            throw new Error("Registration failed");
        }

        const result = await response.json();
        if (result) {
            alert(result.message);
            localStorage.setItem("token", result.token);
            window.location.href = "../todo.html";
        }

    } catch (error) {
        console.log(error);
    }
})

// Login
const loginURL = "https://todo-for-n92.cyclic.app/user/login";
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let username = e.target[0].value;
    let password = e.target[1].value;

    try {
        const response = await fetch(loginURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        if (response.status == 401) {
            alert("Login mavjud emas!");
        }
        if (!response.ok) {
            throw new Error("Login failed");
        }

        const result = await response.json();
        if (result) {
            alert(result.message);
            localStorage.setItem("token", result.token);
            window.location.href = "../todo.html";
        }

    } catch (error) {
        console.log(error);
    }
})
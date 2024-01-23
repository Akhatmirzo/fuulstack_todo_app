const token = localStorage.getItem('token');

if (!token || token == "undefined") {
    window.location.href = "../authen.html";
}




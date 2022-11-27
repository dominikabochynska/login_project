const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // warunke dla poprawnych danych
    if (username === "user" && password === "password") {
        alert("You have successfully logged in.");
        location.reload();
    // sprawdza czy pole z haslem nie jest puste
    } else if (password.length==0) { 
        loginErrorMsg.style.opacity = 1;
        document.getElementById("login-error-msg").innerHTML="Wpisz hasło";
    // resazta przypadkow kiedy haslo lub login nie jest poprawne
    }  else {
    loginErrorMsg.style.opacity = 1;
    document.getElementById("login-error-msg").innerHTML="Hasło lub login nieprawidłowe";
     }
})
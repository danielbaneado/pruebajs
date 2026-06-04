import { loginUser, showUsers } from "../services/auth.js"
export function renderLogin(){
    setTimeout(addEvents)
    return `
    <div class="login-card">
      <h2>Acceder</h2>
      <form id="loginForm">
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="user@example.com" required />
        <label for="password">Contraseña</label>
        <input id="password" type="password" placeholder="password" required />
        <button type="submit">Entrar</button>
      </form>
      <p id="message"></p>
      <div id="loginMsg" class="login-msg" aria-live="polite"></div>
    </div>
    `
}

async function addEvents() {
    await showUsers()
    const form= document.getElementById("loginForm")
    if(!form) return
    form.addEventListener("submit", handleLogin)
}

async function handleLogin(e){
    e.preventDefault()
    const email= document.getElementById("email").value
    const password= document.getElementById("password").value
    const message= document.getElementById("message")
    try {
        const user= await loginUser(email, password)
        if(!user){
            message.textContent= "Invalid credentials"
            return
        }
        message.textContent= "Login successful"
        localStorage.setItem("user", JSON.stringify(user))
        window.location.hash= "#home"
    }
    catch(error){
        message.textContent= "Server error"
    }
}


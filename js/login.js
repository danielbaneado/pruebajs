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

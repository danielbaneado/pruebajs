export function renderHeader(){
    return `
    <header>
        <h1>
            <a href="#home" class="logo">
                El Proyectadas
            </a>
        </h1>
        <nav>
            <a href="#dashboard">
                Dashboard
            </a>
            <a id="settings" href="#settings">
                Settings
            </a>
            <button id="logoutBtn">
                Logout
            </button>
        </nav>
    </header>
    `
}
export function addHeaderEvents(){
    const logoutBtn = document.getElementById("logoutBtn")
    if(!logoutBtn) return
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user")
        window.location.hash= "#login"
    })
}
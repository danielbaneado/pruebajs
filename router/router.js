import {renderHome} from "../js/home.js"
import {renderDashboard} from "../js/dashboard.js"
import {renderSettings} from "../js/settings.js"
import {render404} from "../js/404.js"
import {renderLogin} from "../js/login.js"

const routes= {
    "#": renderLogin,
    "#home": renderHome,
    "#dashboard": renderDashboard,
    "#settings": renderSettings,
    "#login": renderLogin
}
const error= {
    "#404": render404
}

export function renderRoute(){
    const app= document.getElementById("app")
    const path= window.location.hash || "#"
    const renderFunction= routes[path] || error["#404"]
    app.innerHTML= renderFunction()
}
export function initRouter(){
    window.addEventListener("hashchange", renderRoute)
    renderRoute()
}
import { renderHeader, addHeaderEvents } from "./header.js"

export function renderHome(){
    setTimeout(() => {
        addHeaderEvents(),
        getProjects()
    })
    return `
    ${renderHeader()}
    <main class="card">
        <h2>
            Current projects
        </h2>

        <div class="dashboard-grid">

            <div class="stat-card">
                <h3>Total Projects</h3>
                <p id="total-projects">0</p>
            </div>

            <div class="stat-card">
                <h3>Active Projects</h3>
                <p id="active-projects">0</p>
            </div>

            <div class="stat-card">
                <h3>Completed Projects</h3>
                <p id="completed-projects">0</p>
            </div>
        </div>
    </main>
    `
}
async function getProjects(){
    const URL= "http://localhost:5000/reservations"
    const response= await fetch(URL)
    const allProjects= await response.json()
    const total= document.getElementById("total-projects")
    const active= document.getElementById("active-projects")
    const completed= document.getElementById("completed-projects")
    allProjects.forEach(project => {
        total.innerHTML= `${allProjects.length}`
        if(project.status=== "pending"){
            active.innerHTML= `${allProjects.length}`
        }
        else{
            active.innerHTML= `${allProjects.length - 1}`
            completed.innerHTML= `${allProjects.length}`
        }
    });
}
import { renderHeader, addHeaderEvents } from "../js/header.js"

export function renderDashboard(projects){
    setTimeout(() => {
        addHeaderEvents()
        fillDashboard()
    })
    return `
    ${renderHeader()}
    <main>
        <h2>
            Projects
        </h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Assigned To</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="table-content">
            </tbody>
        </table>
    </main>
    `
}

async function fillDashboard(){
    const URL= "http://localhost:5000/projects"
    const response= await fetch(URL)
    const projects= await response.json()
    let tableContent= document.getElementById("table-content")
    projects.forEach(project => {
        tableContent.innerHTML+= `
        <tr>
            <td>${project.id}</td>
            <td>${project.name}</td>
            <td>${project.description}</td>
            <td>${project.status}</td>
            <td>${project.assignedTo}</td>
            <td>
                <button class="update-btn btn btn-primary">
                    Edit
                </button>
                <button class="del-btn btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
        `
        const updateBtn= document.querySelector(".update-btn")
        updateBtn.addEventListener("click", () => {
            
        })
    })
}


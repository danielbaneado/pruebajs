import { renderHeader, addHeaderEvents } from "./header.js"

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
                    <th>Workspace</th>
                    <th>Date</th>
                    <th>Start Hour</th>
                    <th>End hour</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody id="table-content">
            </tbody>
        </table>
    </main>
    `
}

async function fillDashboard(){
    const URL= "http://localhost:5000/reservations"
    const response= await fetch(URL)
    const reservations= await response.json()
    let content= document.getElementById("table-content")
    reservations.forEach((reservation, idx) => {
        content.innerHTML+= `
        <tr>
            <td>${reservation.id}</td>
            <td>${reservation.reason}</td>
            <td>${reservation.workspace}</td>
            <td>${reservation.date}</td>
            <td>${reservation.startHour}</td>
            <td>${reservation.endHour}</td>
            <td>${reservation.status}</td>
            <td>
                <button class="update-btn btn btn-primary">Update</button>
                <button class="del-btn btn btn-danger">Delete</button>
            </td>
        </tr>

        `
        const delBtn= content.querySelector(".del-btn")
        delBtn.addEventListener("click", async (e) => {
            e.preventDefault()
            await fetch(`${URL}/${reservation.id}`,{
                method: "DELETE"
            })
            
        })
    })
}

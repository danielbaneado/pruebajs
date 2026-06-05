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


import { renderHeader, addHeaderEvents } from "./header.js"
export function renderSettings(){
    const currentUser= JSON.parse(localStorage.getItem("user"))
    setTimeout(() => {
        addHeaderEvents(),
        editUser(currentUser)
    })
    return `
    ${renderHeader()}
    <main>
        <h2 class="page-title">
            Settings
        </h2>
        <div class="card">
            <form id="settings-form">
                <div class="form-group">
                    <label for="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value="${currentUser.name}"
                        required
                    >
                </div>
                <div class="form-group">

                    <label for="email">
                        Email
                    </label>

                    <input
                        type="email"
                        id="email"
                        value="${currentUser.email}"
                        required
                    >

                </div>

                <div class="form-group">

                    <label for="password">
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        placeholder="New password"
                    >

                </div>

                <div class="form-group">

                    <label for="role">
                        Role
                    </label>

                    <input
                        type="text"
                        id="role"
                        value="${currentUser.role}"
                        disabled
                    >

                </div>

                <button
                    type="submit"
                    class="btn btn-primary"
                >
                    Save Changes
                </button>

            </form>

        </div>

    </main>
    `
}

const URL= "http://localhost:5000/users"

export async function showUsers(){
    const message= document.getElementById("message")
    const response= await fetch(URL)
    const users= await response.json()
    for (const user of users){
        message.innerHTML+= `
        ${user.name} | ${user.password} | ${user.email} <br>`
    }
}

export async function loginUser(email, password) {
    const response= await fetch(URL)
    const users= await response.json()
    const user= users.find(user =>
        user.email === email && user.password === password
    )
    return user
}
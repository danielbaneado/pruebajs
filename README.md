# Projecter

**Workspace Reservation System SPA**

## General description

This project consist in a Single Page Application (SPA) using JavaScript, Vite, TailwindCSS and JSON Server.


This page is basically a workspaces book system which users can authenticate, navigate throughout protected routes and gestionate consumited info in a simulated API.

Main objectives:

- SPA architecture
- Authentication
- Role manage
- Route protection
- Session persistence
- API Rest
- DOM manipulation
- Modularization
- Good practices

---

## Contexto del problema


An enterprise uses different shared workspaces:
- Meeting rooms
- Private offices
- Coworking spaces
- Auditories


To avoid hour conflicts and optimize intern organization, enterprise needs a platform that allows admin reservations of these spaces

La aplicación debe contemplar dos roles:

### Administrator (admin)

Admin can:

- See all reserves
- Delete reserves
- Gestionate workspaces
- Access administrative modules
- Edit all users

### User

User can:

- Consult reserves
- Edit himself

---

## Used technologies

- JavaScript ES6+
- JSON Server
- HTML5
- CSS3

---

## Base structure

```txt
pruebajs
├── js
│   └── 404.js
│   └── dashboard.js
│   └── header.js
│   └── home.js
│   └── login.js
│   └── main.js
│   └── settings.js
├── json
│   └── db.json.js
├── router
│   └── router.js
├── services
│   └── auth.js
SPA
Styles
```
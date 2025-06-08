fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let container = document.getElementById('users-container')
        for (const user of users) {
            let div = document.createElement('div');
            div.className = 'user'
            div.innerHTML = `
            <p><strong>Id:</strong> ${user.id}</p>
            <p><strong>Name:</strong> ${user.name}</p>
            <a href="user-details.html?id=${user.id}"><button>Check</button></a>
            `
            container.appendChild(div)
        }
    })
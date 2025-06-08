const params = new URLSearchParams(window.location.search)
const userId = params.get('id')

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const userDiv = document.getElementById('user-info')
        userDiv.innerHTML = `<div>${JSON.stringify(user, null, 2)}</div>`
    })

document.getElementById('load-posts').onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(res => res.json())
        .then(posts => {
            const container = document.getElementById('posts-container')
            container.innerHTML = ''
            posts.forEach(post => {
                const div = document.createElement('div')
                div.className = 'post'
                div.innerHTML = `
              <h4>${post.title}</h4>
              <a href="post-details.html?id=${post.id}"><button>Check</button></a>
            `
                container.appendChild(div)
            })
        })
}
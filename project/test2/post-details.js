const params = new URLSearchParams(window.location.search);
const postId = params.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(post => {
        const postDiv = document.getElementById('post-info');
        postDiv.innerHTML = `<div>${JSON.stringify(post, null, 2)}</div>`;
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(res => res.json())
    .then(comments => {
        const container = document.getElementById('comments-container');
        comments.forEach(comment => {
            const div = document.createElement('div');
            div.className = 'comment';
            div.innerHTML = `
            <p><strong>${comment.name}</strong></p>
            <p>${comment.body}</p>
          `;
            container.appendChild(div);
        });
    });
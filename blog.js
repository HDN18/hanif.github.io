const container = document.getElementsByClassName('container')[0];
function generateBox(blog) {
    const box = document.createElement('div');
    box.className = "box"
    container.appendChild(box)
    const img = document.createElement('img');

    img.className = "media"
    img.src= blog.image
    box.appendChild(img);

    const title = document.createElement('h3');
    title.innerText = blog.title
    box.appendChild(title);

    const category = document.createElement('p')
    category.innerText = blog.category
    box.appendChild(category);

    

    // const path = document.createElement('p')
    // path.innerText = blog.path
    // box.appendChild(path)

}

fetch ('https://fahram.dev/api/v2/posts')
.then(response => response.json())

.then(data => data.data.forEach(blog => generateBox(blog)))
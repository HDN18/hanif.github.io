const container = document.getElementsByClassName('container')[0];
function generateBox(portofolio) {
    const box = document.createElement('div');

    box.className = "box"
    container.appendChild(box)
    const img = document.createElement('img');

    img.className = "media"
    img.src= portofolio.image
    box.appendChild(img);

    const title = document.createElement('h3')
    title.innerText = portofolio.title
    box.appendChild(title);

    const year = document.createElement('p')
    year.innerText = portofolio.year
    box.appendChild(year);


    // const path = document.createElement('p')
    // path.innerText = team.path
    // box.appendChild(path)

}

fetch ('https://fahram.dev/api/v2/portfolios')
.then(response => response.json())

.then(data => data.data.forEach(portofolio => generateBox(portofolio)))
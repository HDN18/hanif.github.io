const container = document.getElementsByClassName('container')[0];
function generateBox(team) {
    const box = document.createElement('div');
    box.className = "box"
    container.appendChild(box)
    const img = document.createElement('img');
    img.className = "media"
    img.src= team.image
    box.appendChild(img);
    const name = document.createElement('h3')
    name.innerText = team.name
    box.appendChild(name)
    const email = document.createElement('p')
    email.innerText = team.email
    box.appendChild(email)
    team.link.forEach(link => generateLink(link, box))
}

function generateLink(link, box) {
    const span = document.createElement('span')
    const a = document.createElement('a')
    const i = document.createElement('i')
    i.className = "bi bi-" + link.name
    a.href = link.link
    span.appendChild(a)
    a.appendChild(i)
    box.appendChild(span)
}

teams.forEach(team => generateBox(team))
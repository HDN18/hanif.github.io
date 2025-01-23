let menuItems = [
    {Text: 'Home', Url: '/'},
    {Text: 'About', Url: '/about.html'},
    {Text: 'Teams', Url: '/teams.html'},
    {Text: 'Blog', Url: '/blog.html'},
    {Text: 'Course', Url: '/course.html'},
    {Text: 'Portofolio', Url: '/portofolio.html'},
]

let menu = document.createElement('ul')
menuItems. forEach(item => {
    let menuItem = document.createElement('li')
    let link = document.createElement('a')
    link.href = item.Url;
    link.textContent = item.Text
    menuItem.appendChild(link)
    menu.appendChild(menuItem)
})

document.body.appendChild(menu)
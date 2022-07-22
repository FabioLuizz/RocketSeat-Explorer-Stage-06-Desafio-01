export default class Router {
  router = {}

  add(routeName, page) {
    this.router[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, '', event.target.href)

    this.handle()
  }

  handle() {
    const { hash } = window.location
    const route = this.router[hash] || this.router[404]

    fetch(route)
      .then(data => data.text())
      .then(html => (document.querySelector('#app').innerHTML = html))
  }
}

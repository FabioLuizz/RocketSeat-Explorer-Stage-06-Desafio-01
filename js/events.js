export default function Events({
  buttonAbout,
  buttonExplorer,
  buttonHome,
  page
}) {
  function ButtonEvents() {
    const hash = window.location.hash

    switch (hash) {
      case '':
        homeButtonEvent()
        break

      case '#home':
        homeButtonEvent()
        break

      case '#about':
        aboutButtonEvent()
        break

      case '#explorer':
        explorerButtonEvent()
        break
    }

    function homeButtonEvent() {
      window.location = '#home'

      buttonHome.classList.add('focus')
      buttonExplorer.classList.remove('focus')
      buttonAbout.classList.remove('focus')
      page.classList.remove('bg-universe')
      page.classList.remove('bg-explorer')
    }

    function aboutButtonEvent() {
      window.location = '#about'

      buttonHome.classList.remove('focus')
      buttonExplorer.classList.remove('focus')
      buttonAbout.classList.add('focus')
      page.classList.add('bg-universe')
      page.classList.remove('bg-explorer')
    }

    function explorerButtonEvent() {
      window.location = '#explorer'

      buttonHome.classList.remove('focus')
      buttonExplorer.classList.add('focus')
      buttonAbout.classList.remove('focus')
      page.classList.add('bg-explorer')
      page.classList.remove('bg-universe')
    }
  }

  return {
    ButtonEvents
  }
}

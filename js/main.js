const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const projects = document.querySelector('#projects')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const projectContent = document.querySelector('#project-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    modal: true,
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    background: '#00aa00',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

projects.addEventListener('click', () => {
  const projectBox = new WinBox({
    title: 'Projects',
    background: '#00aa00',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: projectContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

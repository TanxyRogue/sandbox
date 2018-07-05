
var heading = document.querySelector('h1')
var p = document.querySelector('p')
var body = document.querySelector('body')
var footer = document.createElement('footer')
var footerStatus = false

footer.innerHTML = 'By C. Tanaka M.'
heading.onclick = function () {
  if (heading.innerHTML === "Tanxy's Sandbox") {
    heading.innerHTML = 'Sandbox'
  } else {
    heading.innerHTML = "Tanxy's Sandbox"
  }
}

p.onclick = function () {
  if (footerStatus) {
    body.removeChild(footer)
    footerStatus = !footerStatus
  } else {
    body.appendChild(footer)
    footerStatus = !footerStatus
  }
}

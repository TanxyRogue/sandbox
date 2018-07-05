var heading = document.querySelector('h1')
heading.innerHTML = "Tanxy's Sandbox"
heading.onclick = function () {
  if (heading.innerHTML === "Tanxy's Sandbox") {
    heading.innerHTML = 'Sandbox'
  } else {
    heading.innerHTML = "Tanxy's Sandbox"
  }
}

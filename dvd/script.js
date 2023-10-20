const colors = ["#0026ff", "#ff008b", "#be00ff", "#00feff", "#ff8300", "#fffa01", "#ff2600", "#ffffff"]
let canvas
let context
let logo = {
  x: 200,
  y: 200,
  scale: 1,
  speed: 250,
  xorientation: 1,
  yorientation: 1,
  width: 0,
  height: 0,
  color: colors[0],
  img: new Image()
}
let lasttime = 0

window.addEventListener("DOMContentLoaded", function() {
  // Logo init
  logo.img.src = "logo.svg"
  logo.width = logo.img.width * logo.scale
  logo.height = logo.img.height * logo.scale
  // Canvas init
  canvas = document.createElement("canvas")
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  context = canvas.getContext("2d")
  document.body.appendChild(canvas)
  // Start drawing loop
  lasttime = performance.now()
  requestAnimationFrame(draw)
})

// Drawing loop
function draw() {
  const deltatime = (performance.now() - lasttime) / 1000
  // Draw background
  context.globalCompositeOperation = "source-over"
  context.fillStyle = "#000"
  // Draw logo
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.drawImage(logo.img, logo.x, logo.y, logo.width, logo.height)
  // Logo color
  context.globalCompositeOperation = "multiply"
  context.fillStyle = logo.color
  context.fillRect(logo.x, logo.y, logo.width, logo.height)
  // Move logo
  let move = computeMove(deltatime)
  logo.x += move[0]
  logo.y += move[1]
  if (collided()) {
    logo.color = randomColor()
  }
  // Next frame
  lasttime = performance.now()
  requestAnimationFrame(draw)
}

// Return the move to do in px: [x, y]
function computeMove(deltatime) {
  return [logo.xorientation * logo.speed * deltatime, logo.yorientation * logo.speed * deltatime]
}

// Check collision with screen border and change orientation if needed
function collided() {
  let collided = false
  if (logo.x <= 0) {
    logo.xorientation = 1
    collided = true
  } else if(logo.x + logo.width >= canvas.width) {
    logo.xorientation = -1
    collided = true
  }
  if (logo.y <= 0) {
    logo.yorientation = 1
    collided = true
  } else if (logo.y + logo.height >= canvas.height) {
    logo.yorientation = -1
    collided = true
  }
  return collided
}

// Generate a new random logo color
function randomColor() {
  var newColor = logo.color
  while(newColor == logo.color) {
    newColor = colors[Math.floor(Math.random() * colors.length)]
  }
  return newColor
}

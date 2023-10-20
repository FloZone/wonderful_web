const names = ["work_it", "make_it", "do_it", "makes_us", "harder", "better", "faster", "stronger", "more_than", "hour", "our", "never", "ever", "after", "work_is", "over"]
const keys1 = ["&", "é", "\"", "'", "a", "z", "e", "r", "q", "s", "d", "f", "w", "x", "c", "v"]
const keys2 = ["(", "-", "è", "_", "t", "y", "u", "i", "g", "h", "j", "k", "b", "n", ",", ";"]
let altTone = false

// Get the key HTML element from the given keydown event
function getKey(event) {
  const key = event.key
  let index = null
  if (keys1.includes(key)) {
    index = keys1.indexOf(key)
    switchTone(false)
  } else if (keys2.includes(key)) {
    index = keys2.indexOf(key)
    switchTone(true)
  }
  if (index != null) {
    return document.querySelector(".key[data-pos=\"" + index + "\"]")
  } else {
    return null
  }
}

// Switch the tone to the given value&
function switchTone(value) {
  altTone = value
  document.querySelector("input[type='checkbox']").checked = altTone
}

window.addEventListener("DOMContentLoaded", function() {
  // Add click event on checkbox to change tone
  document.querySelector("input[type='checkbox']").addEventListener("click", function() {
    altTone = this.value
  })

  // Add click event on keys to play sound
  let keys = document.querySelectorAll(".key")
  for (let key of keys) {
    key.addEventListener("click", function() {
      let index = this.getAttribute("data-pos")
      new Audio("sound/" + names[index] + "_" + (altTone ? 2 : 1) + ".wav").play()
    })
  }

  // Add keydown event on keys to simulate a key click
  document.body.addEventListener("keydown", function(event) {
    let key = getKey(event)
    if (key) {
      key.click()
      key.classList.add("active")
    } else if (event.ctrlKey) {
      // Change tone on CTRL key
      switchTone(!altTone)
    }
  })

  // Add keyup event on keys
  document.body.addEventListener("keyup", function(event) {
    let key = getKey(event)
    if (key) {
      key.classList.remove("active")
    }
  })
})

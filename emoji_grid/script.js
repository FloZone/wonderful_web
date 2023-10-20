const allEmojis = {
  "Smileys": ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😎", "😍", "😘", "🥰", "😗", "😙", "🥲", "😚", "🙂", "🤗", "🤩", "🤔", "🫡", "🤨", "😐", "😑", "😶", "🫥", "😶‍🌫️", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "🥱", "😴", "😌", "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🫤", "🙃", "🫠", "🤑", "😲", "🙁", "😖", "😞", "😟", "😤", "😢", "😭", "😦", "😧", "😨", "😩", "🤯", "😬", "😮‍💨", "😰", "😱", "🥵", "🥶", "😳", "🤪", "😵", "😵‍💫", "🥴", "😠", "😡", "🤬", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "😇", "🥳", "🥸", "🥺", "🥹", "🤠", "🤡", "🤥", "🫨", "🤫", "🤭", "🫢", "🫣", "🧐", "🤓"],
  "Food": ["🍕", "🍔", "🍟", "🌭", "🍿", "🧂", "🥓", "🥚", "🍳", "🧇", "🥞", "🧈", "🍞", "🥐", "🥨", "🥯", "🥖", "🫓", "🧀", "🥗", "🥙", "🥪", "🌮", "🌯", "🫔", "🍖", "🥫", "🍗", "🥩", "🍠", "🥟", "🥠", "🥡", "🍱", "🍘", "🍙", "🍚", "🍛", "🍜", "🦪", "🍣", "🍤", "🍥", "🥮", "🍢", "🧆", "🥘", "🍲", "🫕", "🍝", "🥧", "🍦", "🍧", "🍨", "🍩", "🍪", "🎂", "🍰", "🧁", "🍫", "🍬", "🍭", "🍡", "🍮", "🍯", "☕", "🧃"],
  "Vegetables": ["🥝", "🥥", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🫐", "🍅", "🫒", "🍆", "🌽", "🌶️", "🫑", "🍄", "🥑", "🥒", "🥬", "🥦", "🥔", "🧄", "🧅", "🥕", "🌰", "🫚", "🫛", "🥜", "🫘"],
  "Plants": ["🌸", "🏵️", "🌹", "🌺", "🌻", "🌼", "🌷", "🪻", "🥀", "☘️", "🌱", "🪴", "🌲", "🌳", "🌴", "🌵", "🌾", "🌿", "🍀", "🍁", "🍂", "🍃"],
  "Animals": ["🦓", "🐴", "🫎", "🫏", "🦄", "🐔", "🐲", "🐒", "🦍", "🦧", "🦮", "🐕", "🐕‍🦺", "🐩", "🐕", "🐈", "🐈‍⬛", "🐅", "🐆", "🐎", "🦌", "🦬", "🦏", "🦛", "🐂", "🐃", "🐄", "🐖", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦘", "🦥", "🦨", "🦡", "🐘", "🦣", "🐁", "🐀", "🦔", "🐇", "🐿️", "🦫", "🦎", "🐊", "🐢", "🐍", "🐉", "🦕", "🦖", "🦦", "🦈", "🐬", "🦭", "🐳", "🐟", "🐠", "🐡", "🦐", "🦑", "🐙", "🦞", "🦀", "🐚", "🪼", "🦆", "🐓", "🦃", "🦅", "🕊️", "🦢", "🦜", "🐦‍⬛", "🪿", "🦩", "🦚", "🦉", "🦤", "🐦", "🐧", "🐤", "🐣", "🦇", "🦋", "🐌", "🐛", "🦟", "🪰", "🪱", "🦗", "🐜", "🪳", "🐝", "🪲", "🐞", "🦂", "🕷️", "🦠"],
  "Love": ["❤️", "🩷", "🧡", "💛", "💚", "💙", "🩵", "💜", "🤎", "🖤", "🩶", "🤍"],
  "Color": ["🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "🟫", "⬛", "⬜" ]
}
const defaultChar = "〰️"
const space = 40

window.addEventListener("DOMContentLoaded", function() {
  let title = document.querySelector("head > title")
  let favicon = document.querySelector("link[rel='icon']")

  // Select a random theme
  const themeIndex = Math.floor(Math.random() * Object.keys(allEmojis).length)
  const theme = Object.keys(allEmojis)[themeIndex]
  const emojis = allEmojis[theme]
  title.innerHTML += " " + theme

  // Generate a random emoji
  function randomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)]
  }

  // Create a svg from the given emoji char
  function emojiToSvg(emoji) {
    let svg = "data:image/svg+xml,"
    svg += "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='80'>"
    svg += emoji
    svg += "</text></svg>"
    return svg
  }

  // Setup the screen
  for (let y = 0; y < window.innerHeight - (space * 1.25); y += space) {
    for (let x = 0; x < window.innerWidth - space; x += space) {
      let p = document.createElement("p")
      p.innerHTML = defaultChar
      p.style.position = "absolute"
      p.style.left = x + "px"
      p.style.top = y + "px"
      // Random char on mouse over
      p.addEventListener("mouseover", function() {
        const emoji = randomEmoji()
        favicon.setAttribute("href", emojiToSvg(emoji));
        this.innerHTML = emoji
      })
      document.body.appendChild(p)
    }
  }
})

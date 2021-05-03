const avatar = document.getElementById('avatar')

const imagesNum = 13
const images = []

const loadImages = () => {
  for (let i = 0; i < imagesNum; i += 1) {
    images[i] = new Image()
    images[i].src = `images/${i + 1}.jpg`
  }
}

loadImages()

avatar.addEventListener('mousemove', e => {
  const avatarWidth = avatar.offsetWidth
  const segmentSize = avatarWidth / imagesNum

  const cursorPosition = e.layerX
  const avatarIdx = Math.floor(cursorPosition / segmentSize)
  avatar.setAttribute('src', images[avatarIdx].src)
})

avatar.addEventListener('mouseleave', () => {
  avatar.setAttribute('src', images[9].src)
})

const generateShortUrl = () => {
  let strings = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let urlShort = ''
  for (let index = 0; index < strings.length; index++) {
    if (urlShort.length >= 9) break
    const randomIndex = Math.floor(Math.random() * strings.length)
    urlShort += strings[randomIndex]
  }
  return urlShort
}

export default generateShortUrl

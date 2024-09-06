import Url from '../models/urlShortnerModel.js'
import generateShortUrl from '../utils/generateShortUrl.js'

const getUrls = async (req, res) => {
  const data = await Url.find()
  res.render('index', { data })
}

const createUrl = async (req, res) => {
  const { mainUrl } = req.body
  const shortUrl = generateShortUrl()
  await Url.create({ mainUrl, shortUrl })
  res.render('index')
}

// redirect to the main url
const redirectUrl = async (req, res) => {
  const { shortUrl } = req.params
  const url = await Url.findOne({ shortUrl })
  res.redirect(url.mainUrl)
}

export { getUrls, createUrl, redirectUrl }

import Url from '../models/urlShortnerModel.js'
import generateShortUrl from '../utils/generateShortUrl.js'

const getUrls = async (req, res) => {
  const data = await Url.find()
  let link = req.protocol + '://' + req.headers.host
  res.render('index', { data: data, link: link })
}

const createUrl = async (req, res) => {
  const { mainUrl } = req.body
  const shortUrl = generateShortUrl()
  const data = await Url.create({ mainUrl, shortUrl })
  let link = req.protocol + '://' + req.headers.host
  res.render('index', {
    data: data,
    link: link,
  })
}

// redirect to the main url
const redirectUrl = async (req, res) => {
  const { shortUrl } = req.params
  const url = await Url.findOne({ shortUrl })
  await Url.findOneAndUpdate(
    { shortUrl: shortUrl },
    { $inc: { count: 1 } },
    { new: true }
  )
  res.redirect(url.mainUrl)
}

export { getUrls, createUrl, redirectUrl }

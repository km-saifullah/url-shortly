import express from 'express'
import {
  createUrl,
  getUrls,
  redirectUrl,
} from '../controllers/urlShortnerController.js'

const router = express.Router()

router.route('/').get(getUrls).post(createUrl)
router.route('/:shortUrl').get(redirectUrl)

export default router

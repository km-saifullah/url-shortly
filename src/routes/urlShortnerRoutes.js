import express from 'express'
import { createUrl, getUrls } from '../controllers/urlShortnerController.js'

const router = express.Router()

router.route('/').get(getUrls).post(createUrl)

export default router

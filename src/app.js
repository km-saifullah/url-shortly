import express from 'express'
import urlRouter from './routes/urlShortnerRoutes.js'

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/v1/url', urlRouter)

export default app

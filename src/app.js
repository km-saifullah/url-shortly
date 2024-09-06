import express from 'express'
import urlRouter from './routes/urlShortnerRoutes.js'
import path from 'path'
import { fileURLToPath } from 'url'

// Convert `import.meta.url` to __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// views setup
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// routes
app.use('/url', urlRouter)

export default app

import express from 'express'
import * as Path from 'node:path'
import dubsRoutes from '../server/routes/dubsRoutes'

const server = express()

server.use(express.json())

server.use('/api/v1/dubs', dubsRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('client/dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('client/dist/index.html'))
  })
}

export default server


import { Server } from 'http'
import app from './app'

const PORT = 50000

let server:Server


async function bootstrap(){

  server= app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })
}

bootstrap()

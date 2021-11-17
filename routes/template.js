import { Router } from 'express'
import * as templateCtrl from '../controllers/template.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'


const router = Router()


// router.use(decodeUserFromToken)

router.post('/create', templateCtrl.create)

export {
  router
}
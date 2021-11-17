import {Router} from 'express'
import * as usersCtrl from '../controllers/users.js'
import {decodeUserFromToken, checkAuth} from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 

router.get('/all-users', usersCtrl.getAllUsers)

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)



export {
    router
}
import { Router } from 'express'
import * as profileCtrl from "../controllers/profiles.js"


const router = Router()

router.get("/:id", profileCtrl.show)


export {
    router
  }
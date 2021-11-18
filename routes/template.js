import { Router } from "express"
import * as templateCtrl from "../controllers/template.js"
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js"

const router = Router()

// router.use(decodeUserFromToken)
router.get("/all", templateCtrl.getAllTemplates)
router.get("/:id", templateCtrl.getTemplateById)
router.get("/user/:id", templateCtrl.getTemplatesByUserId)
router.post("/create", templateCtrl.create)
router.delete("/:id", templateCtrl.deleteTemplate)

export { router }

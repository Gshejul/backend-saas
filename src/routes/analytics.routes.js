import express from 'express'
import { protect } from '../middlewares/auth.middleware.js'
import { authorizeRoles } from '../middlewares/role.middleware.js'
import { totalRecords, totalUsers, totalRevenue } from '../controllers/analytics.controller.js'



const router = express.Router()


router.use(protect)
router.use(authorizeRoles("admin"))

router.get("/users", totalUsers)
router.get("/records", totalRecords)
router.get("/revenue", totalRevenue)


export default router;
import express from 'express'
import { protect } from '../middlewares/auth.middleware.js'
import { authorizeRoles } from '../middlewares/role.middleware.js'


const router = express.Router()


router.get('/dashboard', protect, authorizeRoles("admin"), (req, res) => {
    res.json({message:"Welcome Admin"})
})


export default router;
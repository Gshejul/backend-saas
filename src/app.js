import express from 'express';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import adminRoutes from './routes/admin.routes.js';
import recordRoutes from './routes/record.routes.js';
import analyticsRoutes from './routes/analytics.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';


const app = express()


app.use(express.json())



//routes
app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/admin", adminRoutes)
app.use("/records", recordRoutes)
app.use("/analytics", analyticsRoutes)

app.use(errorHandler)

app.get("/health", (req, res) => {
    res.status(200).json({status:"backend runinng file"})
})



export default app;
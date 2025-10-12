import express from "express" 
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"
import contentRoutes from './routes/contentsRoutes.js' ; 

dotenv.config()

const app = express() 

app.use(express.json())

app.use('/api/auth',authRoutes) ;
app.use('/api/content',contentRoutes) ; 

const port  = process.env.PORT 

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})


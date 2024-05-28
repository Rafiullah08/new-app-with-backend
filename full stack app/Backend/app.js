import express, { response } from "express"

const app = express()
const PORT = 8080

app.listen(PORT, ()=>console.log(`backend up on the port ${PORT}`))


app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.post("/userPost", (Request,response)=>{
  response.json({
    message:  "heelo worlddd"
  })
})
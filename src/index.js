require('./db/mongoose')
const express=require('express')
const User=require('./models/user')
const Task=require('./models/task')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')

const app=express()
const port=process.env.PORT || 3000



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log('Server is up on port '+ port)
})
const bcrypt=require('bcryptjs')
const myFunction=async()=>{
    const password='124124124'
    const hashedPassword=await bcrypt.hash(password,8)
    console.log(password)
    console.log(hashedPassword)

    const isMatch=await bcrypt.compare("12424124",hashedPassword)
    console.log(isMatch)
}
myFunction()




require('../src/db/mongoose')
const Task = require('../src/models/task')
Task.findByIdAndDelete('60ee8f188afba190ff7673c9').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})
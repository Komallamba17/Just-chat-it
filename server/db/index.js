import mongoose from 'mongoose'

const ConnectDatabase = ()=>{
    mongoose.connect(process.env.mongodb+srv://komallamba287:<@GoliBeta17>@cluster0.bpfk5xu.mongodb.net/?retryWrites=true&w=majority, {
        // useCreateIndex : true,
        useNewUrlParser:true,
        useUnifiedTopology: true
    }).then(res=>{
        console.log("connected DB")
    }).catch(err=>{
        console.log(err)
    })
}

export default ConnectDatabase

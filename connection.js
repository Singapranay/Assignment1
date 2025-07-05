const mongoose = require("mongoose")

const url = "mongodb+srv://singapranay123:Lb1H1blBD0NLr4lF@cluster0.rfapt8x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connection = async () =>{
    return mongoose.connect(url)
}

module.exports = connection;
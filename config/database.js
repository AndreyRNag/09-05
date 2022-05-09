const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
   var atlas = await mongoose.connect('mongodb+srv://userAdmin:peixe123@cluster0.b2zt7.mongodb.net/test')
}
module.exports = conexao

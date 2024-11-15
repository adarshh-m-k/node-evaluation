let express = require('express')
let cors = require('cors')

let app = express()

let mongoDB = require('./config/mongoDB')

mongoDB()

let dataRouter = require('./routes/dataRouter')
app.use(express.json())
app.use(cors())
app.use('/data', dataRouter)


app.listen(3000, () => {

    console.log('server connected');

})
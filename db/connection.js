const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(() => {
    console.log('Db connection established...')
}).catch((e) => {
    console.log('Error while connecting to mongoose.', e)
})


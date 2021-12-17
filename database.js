const mongo = require('./mongo')
const userSchema = require('./dbschema')

const connectToMongoDB = async () => {
    await mongo().then((mongoose) => {
        try {
            console.log('Connected to mongoDB');
        } finally {
            mongoose.connection.close();
        }
    })
}

connectToMongoDB()
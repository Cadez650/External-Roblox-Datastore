const mongoose = require('mongoose');
const mongoPath = `mongodb+srv://Cadez:1234@Cadez-Database.hbbee.mongodb.net/test-db?retryWrites=true&w=majority`;

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useNewUrlParser: true,
    })

    return mongoose;
}
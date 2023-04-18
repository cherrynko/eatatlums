const mongoose = require('mongoose');
const m_url = 'mongodb+srv://Cluster09190:RXRqX0JxY31y@cluster09190.uozbghb.mongodb.net/eat@lums?retryWrites=true&w=majority';
// const m_url = 'mongodb://Cluster09190:RXRqX0JxY31@ac-alzyidu-shard-00-00.uozbghb.mongodb.net:27017,ac-alzyidu-shard-00-01.uozbghb.mongodb.net:27017,ac-alzyidu-shard-00-02.uozbghb.mongodb.net:27017/eat@lums?ssl=true&replicaSet=atlas-ab4k7b-shard-0&authSource=admin&retryWrites=true&w=majority';


const m_db = async () => {
    await mongoose.connect(m_url, { useNewUrlParser: true }, async (err, res) => {
        if (err) {
            console.log("error fetching.")
            console.log(err);
        }
        else {
            const fetched_data = mongoose.connection.db.collection("users")
            fetched_data.find({}).toArray(function (err, data) {
                if (err) console.log("error.")
                else {
                    console.log("Database Connected");
                    console.log(data);

                };
            });
        }
    });
}

module.exports = m_db;




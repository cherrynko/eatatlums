const mongoose = require('mongoose');
const m_url = 'mongodb+srv://Cluster09190:RXRqX0JxY31y@cluster09190.uozbghb.mongodb.net/eat@lums?retryWrites=true&w=majority';

const m_db = async() => {
    await mongoose.connect(m_url, {useNewUrlParser: true}, async(err, res) => {
        if (err)
        {
            console.log("error fetching.")
        }
        else
        {
            console.log("executed");
            const fetched_data = mongoose.connection.db.collection("user")
            fetched_data.find({}).toArray(function(err, data){
                if (err) console.log("error.")
                else console.log(data);
            });
        }
});
}

module.exports = m_db;




const dbName = 'syook';
const colName = "timeseries";
const uri = `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000`;

const mongodb  =require('mongodb');
let MongoClient = mongodb.MongoClient;

 function writetoDB(query) {

    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        if (err) {
            return err;
        }

        //client.db(dbName).createCollection("data", { timeseries: { timeField: "timestamp" } } )

        const col = client.db(dbName).collection(colName)

        console.log('query', query);

        col.insertMany(query, (err, result) => {
            if (err) {
                return err;
            }
            client.close();
        });
    });
}

module.exports.writetoDB = writetoDB
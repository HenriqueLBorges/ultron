let MongoClient = require('mongodb').MongoClient;

findSpoiler = async () => {
    let promise = new Promise((resolve, reject) => {
        MongoClient.connect(process.env.db_url, (error, database) => {
            if (error) reject(error);
            else {
                let db = database.db('ultron');
                db.collection('spoilers', (error, collection) => {
                    if (error) reject(error)
                    else {
                        collection.find().toArray((error, results) => {
                            if (error) reject(error);
                            else
                                resolve(results[Math.floor(Math.random()*results.length)]);
                        });
                    }
                });
            }
        });
    });
    return promise;
}

loadParams = async (type) => {
    let promise = new Promise((resolve, reject) => {
        MongoClient.connect(process.env.db_url, (error, database) => {
            if (error) reject(error);
            else {
                let db = database.db('ultron');
                db.collection('configs', (error, collection) => {
                    if (error) reject(error)
                    else {
                        collection.findOne({"type": type}, (error, results) => {
                            if (error) reject(error);
                            else
                                resolve(results);
                        });
                    }
                });
            }
        });
    });
    return await promise;
}

module.exports = {
    findSpoiler: findSpoiler,
    loadParams: loadParams
}
// first: brew services start mongodb-community
// mongoimport --host caselc-shard-0/caselc-shard-00-00-fvau6.gcp.mongodb.net:27017,caselc-shard-00-01-fvau6.gcp.mongodb.net:27017,caselc-shard-00-02-fvau6.gcp.mongodb.net:27017 --ssl --username caselc --password caselc --authenticationDatabase admin --db caselc --collection caselc --type json --file /Users/deslay/Downloads/data.json

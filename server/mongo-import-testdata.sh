#!/bin/sh


# mongoimport <collection-name>
# searches automatically into data/<collection_name>.json
mongoimportjson() {
    mongo Sagandunga --eval "db.$1.drop()"
    mongoimport --jsonArray \
                --db Sagandunga \
                --collection $1 \
                --file data/$1.json  \
                --batchSize 1
}

mongoimportjson users
mongoimportjson locations
mongoimportjson items
mongoimportjson orders

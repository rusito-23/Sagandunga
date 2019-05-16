#!/bin/sh

# EASY MONGO DB QUERIES


#### VARS ####

# available collections
collections=( users locations items orders )

#### FUNCTIONS ####

# dropAll
# drops all collections
dropAll() {
    for collection in "${collections[@]}"; do
        echo "Dropping $collection"
        echo "db.$collection.drop()"
        mongo Sagandunga --eval "db.$collection.drop()"
    done
}


# mongoimport <collection-name>
# searches automatically into database/<collection_name>.json
mongoimportjson() {
    mongoimport --jsonArray \
                --db Sagandunga \
                --collection $1 \
                --file database/$1.json  \
                --batchSize 1
}

# importAll
# imports all collections
# files must exists in database/
importAll() {
    dropAll
    for collection in $collections; do
        mongoimportjson $collection
    done
}

#### MAIN ####

case $1 in
    (dropAll)
        dropAll
        echo "Dropped all collections"
        exit 0;;
    (importAll)
        importAll
        echo "Imported all collections"
        exit 0;;
    (*)
        echo "Usage: $0 {dropAll|importAll}"
        exit 1;;
esac

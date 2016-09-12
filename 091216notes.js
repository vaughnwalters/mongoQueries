// to import a json file called primer-dataset to a new mongo database
// and create a collection called restaurants
// if restaurants collection already exists it will delete it and create new  

mongoimport --db test --collection restaurants --drop --file ~/downloads/primer-dataset.json

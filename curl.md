# curl docs

### Welcome
* `curl http://localhost:3001/`

### Add User
* `curl -X POST -H "Content-Type: application/json" -d '{"firstName":"Luke", "lastName": "Skywalker", "earnings": "123", "country": "USA"}' http://localhost:3001/users`

### Users
##### index
* `curl http://localhost:3001/users`

##### show
* `curl http://localhost:3001/users/<ANY VALID USER ID>`

##### update
* `curl -X PUT -H "Content-Type: application/json" -d '{"firstName":"Luke", "lastName": "Skywalter", "earnings": "1234", "country": "AU", "id": <USER ID>}' http://localhost:3001/users/<USER ID>`

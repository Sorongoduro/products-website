const request = require('postman-request')

const BASE_URL = 'http://localhost:3001/productos'

let getAllProducts = (callback) => {
    request(BASE_URL, (err, res, body) => {
        let parsedBody = JSON.parse(body)
        callback(parsedBody)
    })
}

module.exports = getAllProducts

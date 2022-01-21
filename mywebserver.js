const http = require('http')
const https = require('https')
const fs = require('fs').promises
const fsa = require('fs')

const host = 'localhost'
const port = 8443

const  options = {
    key: fsa.readFileSync('key.pem'),
    cert: fsa.readFileSync('cert.pem')
}

let logFile = fsa.createWriteStream("log.txt", {flags: "a"})
let date

function log(url) {
    date = new Date().toTimeString()
    logFile.write(`${date} -------> ${url}\n`)
}


const  requestListener = function (req, res) {
    /* if ((req.headers['X-Forwarded-Proto'] !== 'https')) {
        res.writeHead(301, {"Location": `https://${req.headers['host']}${req.url}`})
        res.headers['X-Forwarded-Proto'] = 'https'
    }
    */
    res.setHeader("Content-type", "text/html")
    switch (req.url) {
        case "/":
            log(req.url)
            fs.readFile(__dirname + "/index.html")
                .then(contents => {
                    res.writeHead(200)
                    res.end(contents)
                })
                .catch(err => {
                    res.writeHead(500)
                    res.end(err)
                    return
                })
            break
        case "/about":
            log(req.url)
            fs.readFile(__dirname + "/about.html")
                .then(contents => {
                    res.writeHead(200)
                    res.end(contents)
                })
                .catch(err => {
                    res.writeHead(500)
                    res.end(err)
                    return
                })
            break
        case "/docs":
            log(req.url)
            fs.readFile(__dirname + "/docs.html")
                .then(contents => {
                    res.writeHead(200)
                    res.end(contents)
                })
                .catch(err => {
                    res.writeHead(500)
                    res.end(err)
                    return
                })
            break
        default:
            if (!req.url === '/favicon.ico')
            log(req.url)
            res.writeHead(404)
            res.end("Requested resource could not be found")
    }
}

const server = http.createServer(requestListener)
server.listen(8000)

const secure_server = https.createServer(options, requestListener)
secure_server.listen(8443, host, () => {
    console.log(`Server is running on https://${host}:${port}`)
})
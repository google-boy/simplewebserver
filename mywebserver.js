const http = require('http')
const fs = require('fs').promises

const host = 'localhost'
const port = 8000
/*
let logFile = fs.createWriteStream("log.txt", {flags: "a"})
let date

function log(url) {
    date = new Date().toTimeString()
    logFile.write(`${date} -------> ${url}\n`)
}
*/    

const  requestListener = function (req, res) {
    res.setHeader("Content-type", "text/html")
    switch (req.url) {
        case "/":
            //log(req.url)
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
            //log(req.url)
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
            //log(req.url)
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
            //log(req.url)
            res.writeHead(404)
            res.end("Requested resource could not be found")
    }
}

const server = http.createServer(requestListener)
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})
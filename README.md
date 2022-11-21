# A simple NodeJs web server

This is a simple web server developed using NodeJs.

## How to test the server

You need to have NodeJs version 16+ installed on your system.
Clone this repo to test this webserver locally.

### Generating self-signed ssl certificate

#### Windows

#### Linux

Run 

```
openssl req -x509 -nodes -days 22 -newkey rsa:4096 -keyout key.pem -out cert.pem
```

#### Mac

Run

    node mywebserver.js

then open browser 'https://localhost:8443'

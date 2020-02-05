//running this instead of app e.g. 'node appSSL.js' instead of 'node app.js' lets you pretend to serve your page over HTTPS
//HTTPS is required for other devices connecting your localhost (i.e. mobile) to access accelerometers and other device sensors.
//note this is a bit hacky and if you restart your serve your browser may not let you visit as the new SSLL cert != the new one
//if this happens clear all your browsing data and restart browser (confirmed this workd on ios safari)
//for desktop use Chrome as it seems to alows let you bypass ("proceeding to unsafe site")

//STEPS (this will allow Aframe/WebXR API access mobile platform sensors when accessing this server):
//1. run 'node createCerts.js'
//2. run 'node appSSL.js'
//3. go to 'https://localhost:1111'
//4. ignore "safety warnings" from brwoser and go ahead to site anyhow
//5. after creating certs you shouldn't have to run 'node createCerts.js' again until you move to another machine

const https     = require('https');
const forge     = require('node-forge');
const fs        = require('fs');
const express   = require('express');
const app       = express();

//const vars
const LISTEN_PORT = 8080;

//middleware - set default html folder
app.use(express.static(__dirname + '/public'));

/************* CREATE ROUTES ***************/
app.get('/', function(req, res) {
    res.sendFile(__dirname + 'public/index.html');
});

/************* LOAD SSL CERTS (if you ran 'node createCerts.js') ***************/
let privateKeyPem = '';
let certPem = '';

//check for ssl cert files
if (fs.existsSync('./SSL_PRIV_KEY.pem')) {
    privateKeyPem = fs.readFileSync('./SSL_PRIV_KEY.pem', 'utf8');
    console.log(privateKeyPem);
}
else {
    console.warn("run 'node ./createCerts.js' first");
    process.exit(); //kill process so we can run
}

if (fs.existsSync('./SSL_CERT.pem')) {
    certPem = fs.readFileSync('./SSL_CERT.pem', 'utf8');
    console.log(certPem);
}    
else {
    console.warn("run 'node ./createCerts.js' first");
    process.exit(); //kill process so we can run
}

/************* CREATE HTTPS SERVER ***************/
console.log('HTTPS server being created ...');
const options = {
    key: privateKeyPem,
    cert: certPem
};
const secureServer = https.createServer(options, app);

/************* RUN HTTPS SERVER ***************/
secureServer.listen(LISTEN_PORT);     //start server
console.log('Listening on port: ' + LISTEN_PORT );
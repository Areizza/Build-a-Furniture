const fs        = require('fs');
const forge     = require('node-forge');

//*******  BEGIN SSL certs 
forge.options.usePureJavaScript = true; 
var pki = forge.pki;
var keys = pki.rsa.generateKeyPair(2048);
var cert = pki.createCertificate();

cert.publicKey = keys.publicKey;
cert.serialNumber = '01';
cert.validity.notBefore = new Date();
cert.validity.notAfter = new Date();
cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear()+1);

var attrs = [
     {name:'commonName',value:'example.org'}
    ,{name:'countryName',value:'US'}
    ,{shortName:'ST',value:'Virginia'}
    ,{name:'localityName',value:'Blacksburg'}
    ,{name:'organizationName',value:'Test'}
    ,{shortName:'OU',value:'Test'}
];
cert.setSubject(attrs);
cert.setIssuer(attrs);
cert.sign(keys.privateKey);

var pem_pkey = pki.publicKeyToPem(keys.publicKey);
var pem_cert = pki.certificateToPem(cert);

console.log(pem_pkey);
console.log(pem_cert);
//****** END create SSL certs */

//write certs files
fs.writeFile('./SSL_PRIV_KEY.pem', pki.privateKeyToPem(keys.privateKey), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The privateKey was saved!");
});

fs.writeFile('./SSL_CERT.pem', pem_cert, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The cert was saved!");
});
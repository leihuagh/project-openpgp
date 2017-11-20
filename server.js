const fs = require('fs');
const openpgp = require('openpgp'); 
openpgp.initWorker({ path:'openpgp.worker.js' });
openpgp.config.aead_protect = true;
const file_privkey = './privkey.txt';
const file_pubkey = './pubkey.txt';

let pubkey = '-----BEGIN PGP PUBLIC KEY BLOCK ... END PGP PUBLIC KEY BLOCK-----';
let privkey = '-----BEGIN PGP PRIVATE KEY BLOCK ... END PGP PRIVATE KEY BLOCK-----'; //encrypted private key
const passphrase = 'secret passphrase'; 

const options = {
    userIds: [{ name:'Jon Smith', email:'jon@example.com' }], // multiple user IDs
    numBits: 4096,                                            // RSA key size
    passphrase: 'super long and hard to guess secret'         // protects the private key
};

openpgp.generateKey(options).then((key) => {
    const privkey = key.privateKeyArmored; 
    fs.writeFile(file_privkey, privkey, () => {

    });
    const pubkey = key.publicKeyArmored;   
    fs.writeFile(file_pubkey, pubkey, () => {
        
    });
});





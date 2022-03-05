//import { isCryptoKey } from 'util/types';
import { isCryptoKey } from 'util/types';

const crypto = require('crypto') // appel de la bibliothèque crypto intégré à nodejs qui permet de générer des Clefs

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
})

console.log('Private key : ' + privateKey);
console.log('\nPublic key : ' + publicKey);
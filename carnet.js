 Stockage = localStorage;
//Test pour le local storage
localStorage.setItem('Justin', 'Exemple de keys');

localStorage.setItem('Yamine', 'Exemple de keys');
localStorage.setItem('Vallée', 'Exemple de keys');
localStorage.setItem('Ibrahima', 'Exemple de keys');




/**  Création de clefs
import { isCryptoKey } from 'util/types';

const crypto = require('crypto') // appel de la bibliothèque crypto intégré à nodejs qui permet de générer des Clefs

const crypto = require('crypto')
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
})

console.log('Private key : ' + privateKey);
console.log('\nPublic key : ' + publicKey); */

/*** Pas encore au point
const fs = require('fs');
fs.writeFile('privateKey.pem', privateKey, function(err) {
  if (err) throw err
})

fs.writeFile('publicKey.pem', publicKey, function(err) {
  if (err) throw err
}) */

/** Utilisation du Js pour modifier la page
 * 
 * let para = document.querySelector('p'); // Sélectionner un élément du document

  para.addEventListener('click', updateName); // Création d'un event listener (avec appel de la fonction update name )

  function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
} **/

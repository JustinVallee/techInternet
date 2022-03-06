


localStorage.setItem('Wojciech', 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQK<br>BgQC8BrY71Okr7y2KWHLSeEflpFsmLNInpnFlK<br>wamGRZOIBW1nZriY/wpoTdZt8BlsRGxLKoa64<br>qQtcoT/OA3gbs6o9ykv1wKdXJbEKzysaWZsIHD<br>H+zdfo4HR6U8wXrVSJyXjD9iY8vJF0y4q04oUp2v<br>hFF6v2MuGHU8BWtFHMsQZwIDAQAB');
localStorage.setItem('Fraczak', 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKB<br>gQCgrsvcanLD3sErAIlN19Gc9zETkqyZko8gXa<br>bEgtMcBu9gOzQ6HVGzs3jZUTpHzjaqsMbmC9K<br>wzH9yVCEwrQsH0UVNUMovDrRtEMMQsUPqokOpw<br>iQQhzOXubR36saBIhoYhzk3fSRRrw+U3Ywhc+2b5<br>FC5rUx06a5krskq3KzXQIDAQAB');
localStorage.setItem('Marie', 'MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBg<br>HsofgXtAYDr9OKVk4dy8W98RZpi9akYm98Gilva<br>A0ml60sG/PHoky/da4K>tBcWl3Kp/+vDEmeYst<br>7E8wqcK2ofoNRwh/5G8QOp6X6JVirhk1o0+dS<br>lHM882BOPaHLM3NmrwhzbxsAPTdgaMFk8TyTmvsO<br>8XixrUepdzucJWyiHzAgMBAAE=');
localStorage.setItem('Pierre', 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKB<br>gQCHVicw9e8a+kKkdFI4NIfxjGw51rTyhpPQPFp<br>2NByhXTkpfNDoenonEI87IEMXGTo4pJ5xGYs+V<br>F2RgiE/5pDvXxmgjM436DYighn5et70BEyXB1<br>4qnwnN4LK1KpKV1uof0+TbIDY1Cv2xwhWLoHdZ6z<br>gyFzWC++4TZ+LVoL3zPwIDAQAB');
localStorage.setItem('Sebastien', 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AM<br>IIBCgKCAQEAk8D4522D1z2OMPhaoNxy8PeVFZ2<br>NR0X6enzWk7TJDoa+4ZMgBLArTWbrSkJBy5n97<br>empDpLY6K9dIlVXLMhGrrUD5P+KX02THChTX5+<br>j91ebBmIbuB09bKuaBY5H/U3ZUVKGCSPlPNOSbUH<br>0PT1SzWC++4TZ+LVoL3zPwIDAQ');
localStorage.setItem('Christophe', 'MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBi<br>AKBgHqx3b0t7QnOsJrLpL6Ggzt9g7E+WbDZx1<br>+4duXS6e/BPYYX0/MsVjoDUudOto8A/qgQLkJ<br>nLmpnV2+yjTTsSH/79XlFX/X7KGkyEtOWkDc19b<br>J8wI58hLdIuom9+qk4LQYO84XoW1G06Z7TM4o/5P<br>p6koLVHh+PLEY4bx33Djt/AgMBAAE=');
localStorage.setItem('Alexander', 'MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBi<br>AKBgHH6AO3HASDVMkaYjH64YajFJLCFJ1W3ysz<br>4PHYnS4tGRjMuFZWIyG3/D8hwizZpcY61zD4A7<br>3NwK8p5cM3Y45MySW6BHxEJW00Q8FMSFWqWjO<br>cbba2wspGsN6W0hENZp/L7P4PglxhBA05AcGDxnTh<br>Ju4TGbyXNfdFRAm1Q5EZdAgMBAAE=');
localStorage.setItem('Justin', 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBi<br>QKBgQDCLBfB8t6cnZpAt3G4TeT+GJpdm/D6Veiim<br>Vlqz2FuRnuxv8P+s7WiLqJ7LtiyZxTigTY7iLrD<br>GqpznJSgk4VZfP/IcrqnH68O2IzhHef5QaRD<br>y6TevN+IiPXeisZ3BIOnA+D1vjyGbLnbXaK95TGE2E<br>Yh8/XHNXakT4sUDcSiZwIDAQAB');
localStorage.setItem('Yamine', 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBi<br>QKBgQDRGIZtes18sJfDUvbn9qtQhTcJKRP01G5T<br>mcwX2rwUiIAKchz+LBPtir6lIe8A9yLWXoAw9DKB<br>TY5YwaiZGusWSU1LN71N877WJQ2PApLcD8Ml<br>ZCZM/BoA00tTM/a9MiimhSGsBwl9he+UnSrXEqn02<br>/Cqcjckl2WpzBchFqPOUQIDAQAB');

// Code pour la barre de recherche

function getValeur() {
  //Recupérer le contenue de la recherche
  var searchValue = document.getElementById('recherche').value;

  // Si la recherche à une correspondance dans le carnet d'adresse : Switcher
  if (localStorage.getItem(searchValue)) {
    //alert("Vous serez rediriger vers le contact : <" + searchValue+ "> dans le carnet d'adresse");
    window.location = 'carnetdaddresses.html#'+ searchValue; // Chargez la page du carnet d'adresse
    //prompt('Boosso', 'tutu')
  
    
  } 


}



//Ajoute un paragraphe pour chaque message (inbox et messages envoyés)
function P1(){
  if (lsOutput){
    lsOutput.innerHTML = "";
}
  lsOutput.innerHTML += `<br>Bonjour Wojciech,<br><br>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
   commodo aliquet ante. Maecenas scelerisque facilisis arcu, in faucibus 
   tellus condimentum at. Sed dignissim nulla at arcu vehicula ornare. Nunc
    a purus ultricies, consequat magna et, sagittis dui. Nam aliquet, massa a
     rhoncus fermentum, ligula erat mollis lacus, in auctor urna eros non erat.
      Quisque lacinia nibh eros, nec rutrum elit dictum at. Nunc semper consequat 
      gravida. Duis dictum accumsan ante, eu maximus diam hendrerit id. Morbi tincidunt
       posuere pellentesque. Aenean id convallis ligula. Quisque ligula arcu, tristique
        vitae imperdiet et, egestas non felis. In hac habitasse platea dictumst.

<br><br>
   Aenean pellentesque, libero eu bibendum accumsan, felis odio commodo ex, scelerisque 
   fringilla eros turpis quis nisl. Sed laoreet leo nibh, id iaculis quam facilisis nec.
    Duis mattis cursus ipsum quis dictum. Mauris mi ex, sodales vel velit id, lacinia molestie
     orci. 

     <br><br>

  Cordialement,
  <br>
  Justin Yamine`;
}
function P2(){
  if (lsOutput){
    lsOutput.innerHTML = "";
}
  lsOutput.innerHTML += `<br>Bonjour Fraczak,<br><br>

  La purus ultricies, consequat magna et, sagittis dui. Nam aliquet, massa a
  rhoncus fermentum, ligula erat mollis lacus, in auctor urna eros non erat.
   Quisque lacinia nibh eros, nec rutrum elit dictum at. Nunc semper consequat.
   La purus ultricies, consequat magna et, sagittis dui. Nam aliquet, massa a
   rhoncus fermentum, ligula erat mollis lacus, in auctor urna eros non erat.
    Quisque lacinia nibh eros, nec rutrum elit dictum at. Nunc semper consequat . 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
   commodo aliquet ante. Maecenas scelerisque facilisis arcu, in faucibus 
   tellus condimentum at. Sed dignissim nulla at arcu vehicula ornare. Nunc
    a purus ultricies, consequat magna et, sagittis dui. Nam aliquet, massa a
     rhoncus fermentum, ligula erat mollis lacus, in auctor urna eros non erat.
      Quisque lacinia nibh eros, nec rutrum elit dictum at. Nunc semper consequat 
      gravida. Duis dictum accumsan ante, eu maximus diam hendrerit id. Morbi tincidunt
       posuere pellentesque. Aenean id convallis ligula. Quisque ligula arcu, tristique
        vitae imperdiet et, egestas non felis. In hac habitasse platea dictumst.

<br><br>
   Aenean pellentesque, libero eu bibendum accumsan, felis odio commodo ex, scelerisque 
   fringilla eros turpis quis nisl. Sed laoreet leo nibh, id iaculis quam facilisis nec.
    Duis mattis cursus ipsum quis dictum. Mauris mi ex, sodales vel velit id, lacinia molestie
     orci. 

     <br><br>

  Cordialement,
  <br>
  Justin Yamine`;
}
function P3(){
  if (lsOutput){
    lsOutput.innerHTML = "";
}
  lsOutput.innerHTML += `<br>Bonjour Marie,<br><br>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
   commodo aliquet ante. Maecenas scelerisque facilisis arcu, in faucibus 
   tellus condimentum at. Sed dignissim nulla at arcu vehicula ornare. Nunc
    a purus ultricies, consequat magna et, sagittis dui. Nam aliquet, massa a
     rhoncus fermentum, ligula erat mollis lacus, in auctor urna eros non erat.
      Quisque lacinia nibh eros, nec rutrum elit dictum at. Nunc semper consequat 
      gravida. Duis dictum accumsan ante, eu maximus diam hendrerit id. Morbi tincidunt
       posuere pellentesque. Aenean id convallis ligula. Quisque ligula arcu, tristique
        vitae imperdiet et, egestas non felis. In hac habitasse platea dictumst.

<br><br>
   Aenean pellentesque, libero eu bibendum accumsan, felis odio commodo ex, scelerisque 
   fringilla eros turpis quis nisl. Sed laoreet leo nibh, id iaculis quam facilisis nec.
    Duis mattis cursus ipsum quis dictum. Mauris mi ex, sodales vel velit id, lacinia molestie
     orci. 

     <br><br>

  Cordialement,
  <br>
  Justin Yamine`;
}
function P4(){
  if (lsOutput){
    lsOutput.innerHTML = "";
}
  lsOutput.innerHTML += `<br>Bonjour Pierre,<br><br>

   Duis dictum accumsan ante, eu maximus diam hendrerit id. Morbi tincidunt
       posuere pellentesque. Aenean id convallis ligula. Quisque ligula arcu, tristique
        vitae imperdiet et, egestas non felis. In hac habitasse platea dictumst.

<br><br>
   Aenean pellentesque, libero eu bibendum accumsan, felis odio commodo ex, scelerisque 
   fringilla eros turpis quis nisl. Sed laoreet leo nibh, id iaculis quam facilisis nec.

     <br><br>

  Cordialement,
  <br>
  Justin Yamine`;
}
function P5(){
  if (lsOutput){
    lsOutput.innerHTML = "";
}
  lsOutput.innerHTML += `<br>Bonjour Sebastien,<br><br>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
   commodo aliquet ante. Maecenas scelerisque facilisis arcu, in faucibus 
   tellus condimentum at. Sed dignissim nulla at arcu vehicula ornare. Nunc
    a purus ultricies, consequat magna et, sagittis dui. Nam aliquet, massa a
     rhoncus fermentum, ligula erat mollis lacus, in auctor urna eros non erat.
      Quisque lacinia nibh eros, nec rutrum elit dictum at. Nunc semper consequat 
      gravida. Duis dictum accumsan ante, eu maximus diam hendrerit id. Morbi tincidunt
       posuere pellentesque. Aenean id convallis ligula. Quisque ligula arcu, tristique
        vitae imperdiet et, egestas non felis. In hac habitasse platea dictumst.

<br><br>
   Aenean pellentesque, libero eu bibendum accumsan, felis odio commodo ex, scelerisque 
   fringilla eros turpis quis nisl. Sed laoreet leo nibh, id iaculis quam facilisis nec.
    Duis mattis cursus ipsum quis dictum. Mauris mi ex, sodales vel velit id, lacinia molestie
     orci. 

     <br><br>

  Cordialement,
  <br>
  Justin Yamine`;
}
function P6(){
  if (lsOutput){
    lsOutput.innerHTML = "";
}
  lsOutput.innerHTML += `<br>Bonjour Christophe,<br><br>

  La purus ultricies, consequat magna et, sagittis dui. Nam aliquet, massa a
  rhoncus fermentum, ligula erat mollis lacus, in auctor urna eros non erat.
   Quisque lacinia nibh eros, nec rutrum elit dictum at. Nunc semper consequat.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
   commodo aliquet ante. Maecenas scelerisque facilisis arcu, in faucibus 
   tellus condimentum at. Sed dignissim nulla at arcu vehicula ornare. Nunc
    a purus ultricies, consequat magna et, sagittis dui. Nam aliquet, massa a
     rhoncus fermentum, ligula erat mollis lacus, in auctor urna eros non erat.
      Quisque lacinia nibh eros, nec rutrum elit dictum at. Nunc semper consequat 
      gravida. Duis dictum accumsan ante, eu maximus diam hendrerit id. Morbi tincidunt
       posuere pellentesque. Aenean id convallis ligula. Quisque ligula arcu, tristique
        vitae imperdiet et, egestas non felis. In hac habitasse platea dictumst.

<br><br>
La purus ultricies, consequat magna et, sagittis dui. Nam aliquet, massa a
rhoncus fermentum, ligula erat mollis lacus, in auctor urna eros non erat.
 Quisque lacinia nibh eros, nec rutrum elit dictum at. Nunc semper consequat.
   Aenean pellentesque, libero eu bibendum accumsan, felis odio commodo ex, scelerisque 
   fringilla eros turpis quis nisl. Sed laoreet leo nibh, id iaculis quam facilisis nec.
    Duis mattis cursus ipsum quis dictum. Mauris mi ex, sodales vel velit id, lacinia molestie
     orci. 

     <br><br>

  Cordialement,
  <br>
  Justin Yamine`;
}
function P7(){
  if (lsOutput){
    lsOutput.innerHTML = "";
}
  lsOutput.innerHTML += `<br>Bonjour Alexandre,<br><br>

  
    La purus ultricies, consequat magna et, sagittis dui. Nam aliquet, massa a
     rhoncus fermentum, ligula erat mollis lacus, in auctor urna eros non erat.
      Quisque lacinia nibh eros, nec rutrum elit dictum at. Nunc semper consequat 
      gravida. Duis dictum accumsan ante, eu maximus diam hendrerit id. Morbi tincidunt
       posuere pellentesque. Aenean id convallis ligula. Quisque ligula arcu, tristique
        vitae imperdiet et, egestas non felis. In hac habitasse platea dictumst.

<br><br>

   Fringilla eros turpis quis nisl. Sed laoreet leo nibh, id iaculis quam facilisis nec.
    Duis mattis cursus ipsum quis dictum. Mauris mi ex, sodales vel velit id, lacinia molestie
     orci. 

     <br><br>

  Cordialement,
  <br>
  Justin Yamine`;
}


//Ajoute le contenu de htmlContent avant la balise fermante de p1
//p1.insertAdjacentHTML('beforeend', htmlContent);

//Ajoute du texte après la balise ouvrante de p2
//p2.insertAdjacentText('afterbegin', 'Texte ajouté dans ');






/**  Création de clefs
import { isCryptoKey } from 'util/types';

const crypto = require('crypto') // appel de la bibliothèque crypto intégré à nodejs qui permet de générer des Clefs

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

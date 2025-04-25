import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


  // initiate the arrays to generate the domain names
  function generateDomain (){
  let pronoun = ['the', 'our','they', 'that', 'them', 'what', 'which', 'whom', 'one', 'anybody', 'everybody', 'noone'];
  let adj = ['great', 'big', 'small', 'fast', 'slow', 'large', 'dinky', 'humongous', 'quiet', 'loud', 'medium', 'tiny', 'teeny', 'giant'];
  let noun = ['jogger', 'racoon', 'dog', 'cat', 'snake', 'car', 'train', 'airplane', 'river', 'lake', 'mesa', 'Earth', 'Sun', 'Pluto', 'planet', 'galaxy'];
  let extensions = ['.com', '.us', '.org', 'de', '.net']
  
  const randomPronoun = Math.floor(Math.random() * pronoun.length);
  const randomAdj = Math.floor(Math.random() * adj.length);
  const randomNoun = Math.floor(Math.random() * noun.length);
  const randomExtensions = Math.floor(Math.random() * extensions.length);


  const randomItemPronoun = pronoun[randomPronoun];
  const randomItemAdj = adj[randomAdj];
  const randomItemNoun = noun[randomNoun];
  const randomItemExtensions = extensions[randomExtensions]
  

  document.getElementById('textOutput').innerText = ("www." + randomItemPronoun + randomItemAdj + randomItemNoun + randomItemExtensions);

}

window.onload = function() {
  //write your code here
  document.getElementById('randomizeBtn')
  .addEventListener('click', generateDomain);
};

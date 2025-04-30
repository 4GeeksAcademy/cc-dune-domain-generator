import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


  // initiate the arrays to generate the domain names
  function generateDomain (){
  let pronoun = ['the', 'our','they', 'that', 'them', 'what', 'which', 'whom', 'one', 'anybody', 'everybody', 'noone'];
  let adj = ['great', 'big', 'small', 'fast', 'slow', 'large', 'dinky', 'humongous', 'quiet', 'loud', 'medium', 'tiny', 'teeny', 'giant'];
  let noun = ['jogger', 'racoon', 'dog', 'cat', 'snake', 'car', 'train', 'airplane', 'river', 'lake', 'mesa', 'Earth', 'Sun', 'Pluto', 'planet', 'galaxy'];
  let extensions = ['.com', '.us', '.org', '.de', '.net', '.biz', '.info']
  
  // randomize the items in the array
  const pronounIndex = Math.floor(Math.random() * pronoun.length);
  const adjIndex = Math.floor(Math.random() * adj.length);
  const nounIndex = Math.floor(Math.random() * noun.length);
  const extensionsIndex = Math.floor(Math.random() * extensions.length);

  // store the randomized items in variables
  const randomPronoun = pronoun[pronounIndex];
  const randomAdj = adj[adjIndex];
  const randomNoun = noun[nounIndex];
  const randomExtensions = extensions[extensionsIndex]
  
    // display the results so the world can see our results
  document.getElementById('textOutput').innerText = ("www." + randomPronoun + randomAdj + randomNoun + randomExtensions);

}

window.onload = function() {
  //write your code here
  // when the button is clicked show us what's up
  document.getElementById('randomizeBtn')
  .addEventListener('click', generateDomain);
};

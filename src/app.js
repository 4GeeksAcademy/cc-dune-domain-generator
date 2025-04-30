import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


  // initiate the arrays to generate the domain names
  function generateDomain (){
  const pronoun = ['the', 'our','they', 'that', 'them', 'what', 'which', 'whom', 'one', 'anybody', 'everybody', 'noone'];
  const adj = ['great', 'big', 'small', 'fast', 'slow', 'large', 'dinky', 'humongous', 'quiet', 'loud', 'medium', 'tiny', 'teeny', 'giant'];
  const noun = ['jogger', 'racoon', 'dog', 'cat', 'snake', 'car', 'train', 'airplane', 'river', 'lake', 'mesa', 'Earth', 'Sun', 'Pluto', 'planet', 'galaxy'];
  const extensions = ['.com', '.us', '.org', '.de', '.net', '.biz', '.info']
  
  
  const quads = [];
  
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = i + 1; j < adj.length; j++) {
      for (let k = j + 1; k < noun.length; k++) {
        quads.push([pronoun[i] + adj[j] + noun[k]]);
    }
  }
}

  
  quads.forEach((x) => {
    for (let l = 0; l < extensions.length; l++) {
      console.log("www."+x+extensions[l]);
  }});
  
    // more statements
  }


window.onload = function() {
  //write your code here

    // more statements

  // when the button is clicked show us what's up
  document.getElementById('randomizeBtn')
  .addEventListener('click', generateDomain);
};

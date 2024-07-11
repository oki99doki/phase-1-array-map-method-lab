const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

  
function capitalizeFirstLetter(word) {
  var firstLetter = word.charAt(0).toUpperCase();
  var restOfWord = word.slice(1);
  return firstLetter + restOfWord;
}

function captitalizeWords(tutorials) {
  const sentence = tutorials;
  const words = sentence.split(" ");
  const wordsCapitalized = words

  for (let i = 0; i < words.length; i++) {
    wordsCapitalized[i] = words[i].charAt(0).toLocaleUpperCase() + words[i].slice(1)
    //console.log(words[i]);
    //console.log(wordsCapitalized[i]);
  }  

  words2sentence = wordsCapitalized.join(' ')
  //console.log(words2sentence)
  return  words2sentence
}


let tutorialsCap = []

function titleCased(tutorials) {

  for (let j = 0; j < tutorials.length; j++) {
    //console.log(j)
    tutorialsCap[j] = captitalizeWords(tutorials[j])
    //console.log(words[i]);
    //console.log(wordsCapitalized[i]);
    //console.log(tutorialsCap)
    //return tutorialsCap[j]
    if (j === tutorials.length-1) {
      //console.log('the last ONE')
      //return result = tutorialsCap[j]
    }
  }  
  return tutorialsCap
}

results = titleCased(tutorials)

console.log(results)
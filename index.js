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

//const titleCased = () => {
/*  for (let i=0; i<=tutorials.length-1; i++) {
    console.log(`i is ${i}`)
    console.log(tutorials[i])
    let titleCased = tutorials[i].titleCased
    console.log(titleCased)

  }
*/
  
  //return tutorials
//}


function titleCased(str) {
  //let words = str.toLowerCase().split(' ');
  let words = str.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}


/*
//let sentence = "hello world";
let sentence = tutorials[0];
let titleCasedSentence = titleCase(sentence);
console.log(titleCasedSentence); // Output: "Hello World"
*/

for (let i=0; i<=tutorials.length-1; i++) {
  let sentence = tutorials[i];
  let titleCasedSentence = titleCased(sentence);
  console.log(titleCasedSentence); 
}
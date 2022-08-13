import words from '../data/dataTest.js';

const button = document.querySelector('.start-btn');

let deuWord = '';
let deuWordZwei = '';
let engWord = '';
let engWordTwo = '';

function randomWordGenerator() {
  const random = Math.floor(Math.random() * 2);

  deuWord = words[random].wort;
  deuWordZwei = words[random].wortZwei;
  engWord = words[random].word;
  engWordTwo = words[random].wordTwo;

  const germanWord = (document.getElementById('germanWord').innerHTML =
    deuWord);
  const germanWordZwei = (document.getElementById('germanWordZwei').innerHTML =
    deuWordZwei);
  const englishWord = (document.getElementById('englishWord').innerHTML =
    engWord);
  const englishWordTwo = (document.getElementById('englishWordTwo').innerHTML =
    engWordTwo);
  return;
}

button.addEventListener('click', () => {
  randomWordGenerator();
});

/* setInterval(randomWordGenerator, 6000); */

/* function timer() {
  setInterval();
}

const clearAlert = () => {
  setTimeout(() => {
    dispatch({ type: CLEAR_ALERT });
  }, 3000);
};
 */

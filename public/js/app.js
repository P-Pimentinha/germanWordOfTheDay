import words from '../data/data.js';

const button = document.querySelector('.start-btn');

let deuWord = '';
let engWord = '';
/* const url = 'http://localhost:5000/api/v1/words/';

const getAllWords = async () => {
  try {
    const { data } = await axios.get(url);
    const { words } = data;

    words.map((word) => {
      console.log(word.word);
    });
  } catch (error) {
    console.log(error);
  }
};

getAllWords(); */

function randomWordGenerator() {
  const random = Math.floor(Math.random() * 34);

  deuWord = words[random].wort;

  engWord = words[random].word;

  const germanWord = (document.getElementById('germanWord').innerHTML =
    deuWord);

  const englishWord = (document.getElementById('englishWord').innerHTML =
    engWord);
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

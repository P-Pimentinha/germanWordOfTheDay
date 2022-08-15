import words from '../data/data.js';
const button = document.querySelector('.start-btn');

let deuWord = '';
let engWord = '';
let wordsApiFetch = [];

const url = '/api/v1/words/';

const getAllWords = async () => {
  try {
    const { data } = await axios.get(url);
    const { words } = data;

    words.map((word) => {
      wordsApiFetch.push(word);
      return;
    });
  } catch (error) {
    console.log(error);
  }
};

getAllWords();
/* 
const sendPostRequest = async (dataToSend) => {
  try {
    const resp = await axios.post(url, dataToSend);
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

const postRandom = () => {
  try {
    words.map((word) => {
      sendPostRequest(word);
    });
  } catch (error) {
    console.log(error);
  }
};

postRandom(); */

const randomWordGenerator = () => {
  const random = Math.floor(Math.random() * wordsApiFetch.length);

  deuWord = wordsApiFetch[random].wort;

  engWord = wordsApiFetch[random].word;

  const germanWord = (document.getElementById('germanWord').innerHTML =
    deuWord);

  const englishWord = (document.getElementById('englishWord').innerHTML =
    engWord);
};

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

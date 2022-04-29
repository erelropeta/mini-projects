// select .lorem-ipsum__form, .lorem-ipsum__parnum, and .lorem-ipsum__paragraphs
const paragraphNum = document.querySelector('.lorem-ipsum__parnum');
const loremForm = document.querySelector('.lorem-ipsum__form');
const loremParagraphs = document.querySelector('.lorem-ipsum__paragraphs');

// add submit event listener to loremSubmitBtn
loremForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // assign value of paragraphNum to paragraphNumValue
  const paragraphNumValue = parseInt(paragraphNum.value);

  let randomParagraphs = [];

  generateRandomParagraphs(randomParagraphs, paragraphNumValue);

  const displayParagraphs = randomParagraphs
    .map(function (paragraph) {
      return `
    <p class="lorem-ipsum__paragraph">${paragraph}</p>
    `;
    })
    .join('');

  loremParagraphs.innerHTML = displayParagraphs;
});

function generateRandomParagraphs(parArray, parNum) {
  let pastNum;

  for (let i = 0; i < parNum; i++) {
    let num;
    do {
      const randomNum = Math.floor(Math.random() * paragraphs.length);
      num = randomNum;
    } while (pastNum == num);

    parArray.push(paragraphs[num]);
    pastNum = num;
  }

  return parArray;
}

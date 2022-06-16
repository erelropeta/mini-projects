import fecthCocktails from './modules/fetch-cocktails.js';

let cocktailsURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

const cocktailsContainer = document.querySelector('.cocktails-container');
const cocktailsSearchInput = document.querySelector('.cocktails__search-input');

displayCocktails();

cocktailsSearchInput.addEventListener('keyup', () => {
  const cocktailsSearchValue = cocktailsSearchInput.value;

  if (cocktailsSearchValue !== '') {
    cocktailsURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailsSearchValue}`;
  } else {
    cocktailsURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
  }

  displayCocktails();
});

async function displayCocktails() {
  const cocktailsList = await fecthCocktails(cocktailsURL);

  try {
    const displayCocktails = cocktailsList
      .map(({ idDrink: id, strDrink: name, strDrinkThumb: img }) => {
        return `<a href="./cocktail.html">
              <article class="cocktail" data-id="${id}">
                <div class="cocktail__img-container">
                  <img
                    class="cocktail__img"
                    src="${img}"
                    alt="${name}"
                  />
                  <div class="cocktail__img-overlay"></div>
                </div>
                <p class="cocktail__name">${name}</p>
              </article>
            </a>`;
      })
      .join('');

    cocktailsContainer.innerHTML = displayCocktails;

    const cocktails = document.querySelectorAll('.cocktail');

    cocktails.forEach((cocktail) => {
      cocktail.addEventListener('click', (e) => {
        localStorage.setItem('cocktail', e.currentTarget.dataset['id']);
      });
    });
  } catch (error) {
    cocktailsContainer.innerHTML = `<p class="cocktails__error-message">Sorry, your search does not match any cocktails.</p>`;
  }
}

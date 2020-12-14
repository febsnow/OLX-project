import './sass/main.scss';
import './js/ivanov-modules';
// import renderFavourites from './js/oksana-favourites';
// import './js/oksana-product';

import './js/menu_mobile';
import { refs } from './js/modal';
import categories from './templates/categories.hbs';
import mobileFilters from './templates/mobile_filters.hbs';
import filters from './templates/filters.hbs';
import cards from './templates/card.hbs';
import search from './templates/search.hbs';
import FetchApi from './js/fetchAPI';

const categoriesList = document.querySelector('.js-categories');
const filtersList = document.querySelector('.js-nav-menu');
const mobileFiltersList = document.querySelector('.mobile-js-nav-menu');

const filtersAndCategories = new FetchApi();

async function createFilters() {
  try {
    const filters = await filtersAndCategories.fetchFIlters();
    const buildMarkup = items => {
      filtersMarkup(items);
    };
    return buildMarkup(filters);
  } catch (error) {
    throw error;
  }
}

async function createCategories() {
  try {
    const categories = await filtersAndCategories.fetchCategories();
    const list = await categories.json();
    console.log(list);
    //

    // function toArr(item) {
    //   const result = [];
    //   for (const item in list) {
    //     result.push(list[item]);
    //   }

    //   console.log('result', result);
    //   return result;
    // }
    // const arlist = toArr(list);
    // console.log('arlist', arlist);

    // function rr(item) {
    //   for (const item in arlist) {
    //     arlist[item].map(element => {
    //       console.log('перебор ll', element.category);
    //     });
    //   }
    // }
    // const ll = rr(arlist);
    //
    const result = Object.keys(list);
    const buildMarkup = items => {
      cards(items);
      categoriesMarkup(items);
    };
    clearCategories();

    return buildMarkup(result);
  } catch (error) {
    throw error;
  }
}

filtersList.addEventListener('click', onFilterBtnClick);

function onFilterBtnClick(e) {
  console.log(e.target.nodeName);
  if (e.target.nodeName === 'BUTTON') {
    filtersAndCategories.searchQuery = e.target.textContent;
    createSingleCategory(filtersAndCategories.searchQuery);
    e.target.classList.add('active');
  }
}
//
// const filterBtn = document.querySelector('[data-acton="filter"]');
const resetFilterBtn = document.querySelector('[data-action-reset]');
// console.log(filterBtn);

resetFilterBtn.addEventListener('click', onResetBtnClick);

function onResetBtnClick(e) {
  console.dir(e.target);
  // filterBtn.classList.remove('.active');
  filtersList.innerHTML = '';

  console.log('removed filter');
  filtersAndCategories.resetPage();

  createFilters();

  createCategories();
}
// filterBtn.addEventListener('click', onFilterBtnClick);

// function onFilterBtnClick(e) {
//   console.log(e.target);
// }
//
async function createSingleCategory() {
  try {
    const categories = await filtersAndCategories.fetchSingleCategory();
    const list = await categories.json();
    // const result = Object.keys(list);
    const buildMarkup = items => {
      singleCategoryMarkup(items);
    };
    clearCategories();
    console.log(list);
    return buildMarkup(list);
  } catch (error) {
    throw error;
  }
}

function filtersMarkup(items) {
  filtersList.insertAdjacentHTML('beforeend', filters(items));
  mobileFiltersList.insertAdjacentHTML('beforeend', mobileFilters(items));
}
function categoriesMarkup(items) {
  categoriesList.insertAdjacentHTML('beforeend', categories(items));
}
function singleCategoryMarkup(items) {
  categoriesList.insertAdjacentHTML('beforeend', cards(items));
}

const page = document.querySelector('.js-page-number');
page.addEventListener('click', createCategories);

function clearCategories() {
  categoriesList.innerHTML = '';
}

const pageList = document.querySelector('.js-page-list');

const showAllBtn = document.querySelector('[data-action="show-total"]');
categoriesList.addEventListener('click', onShowMoreClick);

function onShowMoreClick(e) {
  console.dir(e.target.dataset.action);
  if (e.target.dataset.action === 'show-total') {
    filtersAndCategories.searchQuery =
      e.target.previousElementSibling.textContent;
    pageList.innerHTML = '';
    createSingleCategory(filtersAndCategories.searchQuery);
  }
}

createFilters();
createCategories();
console.log(refs.modalContent);
//
// refs.modalContent.insertAdjacentHTML('beforeend', search());

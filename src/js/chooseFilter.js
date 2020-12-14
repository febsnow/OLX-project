const filterBtn = document.querySelector('.button filter');
const resetFilterBtn = document.querySelector('[data-action="filter"]');
console.log(resetFilterBtn);

resetFilterBtn.addEventListener('click', onResetBtnClick);

function onResetBtnClick() {
  if (filterBtn) {
    filterBtn.classList.remove('.active');
    console.log('removed filter');
  }
}
filterBtn.addEventListener('click', onFilterBtnClick);

function onFilterBtnClick(e) {
  console.log(e.target);
}

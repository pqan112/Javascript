function changeProductList(type, element) {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  const tabs = $$('.tab-item')
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.background = '#b14c38'
  }
  element.style.background = '#ee4d2d'

  $(`#${type}`).style.display = 'block'
  switch (type) {
    case 'popular':
      $('#new').style.display = 'none'
      $('#best-sell').style.display = 'none'
      break;
    case 'new':
      $('#popular').style.display = 'none'
      $('#best-sell').style.display = 'none'
      break;
    case 'best-sell':
      $('#popular').style.display = 'none'
      $('#new').style.display = 'none'
      break;
  }
}
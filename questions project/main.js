// cach 1: 
// const btns = document.querySelectorAll('.question-btn');
// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   })
// })
// cach 2:
const questionItems = document.querySelectorAll('.question-item');
questionItems.forEach(function (item) {
  const btn = item.querySelector('.question-btn');
  btn.addEventListener('click', function () {
    // Open question-text but when open another, the first one does not automatically close
    // Add forEach to solve
    questionItems.forEach(function (elm) {
      if (elm !== item) {
        elm.classList.remove('show-text')
        console.log(elm);
      }
    });
    item.classList.toggle('show-text');
    // console.log(item);
  })
})

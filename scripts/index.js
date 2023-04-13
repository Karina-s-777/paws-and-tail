const listOfChoice = document.querySelector('.gallery__choice');
const element = document.querySelectorAll('.gallery__element');
const listofActivity = document.querySelectorAll('.gallery__item');
const listOfLikes = document.querySelectorAll('.gallery__like');
const buttonNextPage = document.querySelector('.gallery__next-page-buttom');
const pageOne = document.querySelector('.gallery__page-one');
const pageTwo = document.querySelector('.gallery__page-two');
const buttonPrevPage = document.querySelector('.gallery__prev-page');

function filter() {
  listOfChoice.addEventListener('click', e => {
    const targetId = e.target.dataset.id;
    const target = e.target;
    console.log(target);

    listofActivity.forEach(i => i.classList.remove('active_animal', 'active_gender', 'gallery__on', 'gallery__liked'))

    switch (targetId) {
      case 'cat':
        target.classList.add('active_animal')
        break;
      case 'dog':
        target.classList.add('active_animal')
        break;
      case 'male':
        target.classList.add('active_gender')
        break;
      case 'female':
        target.classList.add('active_gender')
        break;
      case 'all':
        target.classList.add('gallery__on')
        break;
    }

  switch (targetId) {
    case 'all':
      getItems('gallery__element')
      break
    case 'cat':
      getItems(targetId)
      break
    case 'dog':
      getItems(targetId)
      break
    case 'male':
      getItems(targetId)
      break
    case 'female':
      getItems(targetId)
      break
  }
})
}

filter();

function getItems(className) {
  element.forEach(i => {
    if (i.classList.contains(className)) {
      i.style.display = 'block'
    } else {
      i.style.display = 'none'
    }
  })
}
//создать функцию по подсчету количества лайков фото
// listOfLikes.forEach(like => {
//   like.addEventListener('click', e => {
//     e.target.classList.toggle('gallery__like_on')
//   })
// })

buttonNextPage.addEventListener('click', () => {
  pageTwo.style.display = 'block';
  pageOne.style.display = 'none';
  buttonPrevPage.style.display = 'block'
})

buttonPrevPage.addEventListener('click', () => {
  pageTwo.style.display = 'none';
  pageOne.style.display = 'block';
  buttonPrevPage.style.display = 'none'

})

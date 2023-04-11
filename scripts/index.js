const listOfChoice = document.querySelector('.gallery__choice');
const element = document.querySelectorAll('.gallery__element');

function filter() {
  listOfChoice.addEventListener('click', e => {
    const targetId = e.target.dataset.id;
    console.log(targetId);

    switch(targetId) {
      case 'all':
        break
      case 'cat':
        
    }
  })
}

filter();

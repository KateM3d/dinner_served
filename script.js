const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photos = ["/assets/1.jpg", "/assets/2.jpg", "/assets/3.jpg", "/assets/4.jpg", "/assets/5.jpg", "/assets/6.jpg", "/assets/7.jpg"];


console.log(photos[7]);

let i = 0;


next.addEventListener('click', () => {
    i++;
    if (i > photos.length - 1) {
        i = 0;
    }
    document.querySelector('#image').src = photos[i];
})

back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = photos.length - 1;
    }
    document.querySelector('#image').src = photos[i];
})



const comment = document.querySelector('.comment');
const commentBtn = document.querySelector('.comment_btn');
const toAdd = document.querySelector('.toAdd');

commentBtn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.innerText = comment.value;
    item.classList.add('addedComment');
    toAdd.appendChild(item);
    comment.value = '';


    item.addEventListener('click', () => {
        item.classList.add('wrongOrder');
    })

    item.addEventListener('dblclick', () => {
        toAdd.removeChild(item);
    })

})
const nameElement = document.getElementById ('username').textContent;
console.log(nameElement);
const btn = document.querySelector('.btn');
console.log(btn);
btn.addEventListener('click', () => {
    const userName = nameElement.textContent;
    console.log(userName);
})

// const commentsResult = document.getElementById ('commentsResult');
// const avatar = document.getElementById ('avatar');


// const block = document.querySelector('.block');
// function changeBgImg(){
//     block.style.backgroundImage = avatar;
// }
// function(){
//     changeBgImg();
// });
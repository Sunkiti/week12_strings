const nameElement = document.getElementById ('username');
console.log(nameElement);
const avatarElement = document.getElementById ('avatar');
console.log(avatarElement);
const commentsElement = document.getElementById ('comments');
console.log(commentsElement);
const btn = document.querySelector('.btn');
console.log(btn);
btn.addEventListener('click', () => {
    const userName = nameElement.value;
    console.log(userName);
    const userAvatar = avatarElement.value;
    console.log (userAvatar);
    const userComments = commentsElement.value;
    console.log(userComments);
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
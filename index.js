const nameElement = document.getElementById ('username');
console.log(nameElement);
const avatarElement = document.getElementById ('avatar');
console.log(avatarElement);
const commentsElement = document.getElementById ('comments');
console.log(commentsElement);
const btn = document.querySelector('.btn');
console.log(btn);
const nameResult = document.getElementById ('nameResult');
console.log(nameResult);
const avatarResult = document.getElementById ('avatarResult');
console.log(avatarResult);
const commentsResult = document.getElementById ('commentsResult');
console.log(commentsResult);
btn.addEventListener('click', () => {
    const userName = nameElement.value;
    console.log(userName);
    const userAvatar = avatarElement.value;
    console.log (userAvatar);
    const userComments = commentsElement.value;
    console.log(userComments);
    nameResult.value = nameElement.value;
    document.querySelector ('#img').src = userAvatar;
    commentsResult.value = commentsElement.value;
})


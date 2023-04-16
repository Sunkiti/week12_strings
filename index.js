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
const time = document.getElementById ('time');
console.log (time);
const arr = [
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/6.jpg",
];
function checkedWord(word) {
    return `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()} `;
}
btn.addEventListener('click', () => {
    time.innerHTML = new Date;
    const userName = nameElement.value;
    console.log(userName);
    const userAvatar = avatarElement.value;
    console.log (userAvatar);
    const userComments = commentsElement.value;
    console.log(userComments);
    let url = "";
    if (!avatarElement.value) {
        const indexArr = Math.floor(Math.random() * 6);
        console.log();
        url = arr[indexArr];
        } else {
        url = avatarElement.value;
        }
    nameResult.value = nameElement.value;
    const initials = nameResult.value.split (" ");
    let surname = checkedWord(initials[0]);
    let nameUser = checkedWord(initials[1]);
    let patronimic = checkedWord(initials[2]);
    const totalString = `${surname} ${nameUser} ${patronimic}`;
    nameResult.value = (`${totalString}`);
    avatarResult.innerHTML = 
    `<div class="image">
        <img
        src=${url}
        alt="картинка"
        class="userAvatar"/>
    </div>`;
    commentsResult.value = commentsElement.value;
})


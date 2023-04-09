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
    avatarResult.style.backgroundImage = avatarElement;
    commentsResult.value = commentsElement;
})
// var fileReader = new FileReader();
// fileReader.onload = functino() {
//     img1.src = fileReader.result;
// }

// fileReader.readAsDataURL(target.files[0]);
// document.getElementById("avatar").addEventListener("change", function () {
//     if (this.files[0]) {
//     var fr = new FileReader();
//     fr.addEventListener("load", function () {
//     document.getElementById("avatarResult").style.backgroundImage = "url(" + fr.result + ")";
// }, false);
//     fr.readAsDataURL(this.files[0]);
//     }
// });


// const block = document.querySelector('.block');
// function changeBgImg(){
//     block.style.backgroundImage = avatar;
// }
// function(){
//     changeBgImg();
// });
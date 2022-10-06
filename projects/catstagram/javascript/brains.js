var counter1 = 0
var counter2 = 0
var counter3 = 0
var counter4 = 0
var counter5 = 0
function likePhoto() {
    counter1 += 1
}
const info = new info1();
info.name = Masahiro;
info.name_last = Sakurai;
info.followers = 705000;
info.profile_pic = placeholder;
function likePhoto2() {
    counter2 += 1
}
function likePhoto2() {
    counter3 += 1
}
function likePhoto2() {
    counter4 += 1
}
function likePhoto2() {
    counter5 += 1
};


document.getElementById("likeCount1").innerHTML = counter1;
document.getElementById("likeCount1").innerHTML = counter2;
document.getElementById("likeCount1").innerHTML = counter3;
document.getElementById("likeCount1").innerHTML = counter4;
document.getElementById("likeCount1").innerHTML = counter5;
setTimeout(function () { document.getElementById("name").innerHTML = user.name; }, 3000);
setTimeout(function () { document.getElementById("name_last").innerHTML = user.name_last; }, 3000);
setTimeout(function () { document.getElementById("followers").innerHTML = "Followers: " + user.followers.length; }, 3000);
setTimeout(function () { $("#profile_pic").attr("src", user.profile_pic); }, 3000);

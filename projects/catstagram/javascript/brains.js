var counter1 = 0
var counter2 = 0
var counter3 = 0
var counter4 = 0
var counter5 = 0
function likePhoto() {
    counter1 = counter1 + 1
    console.log(counter1)
};

var user = {
    "name" : "Dylan" ,
    "name_last" : "Ambrose",
    "followers" : [none, seriouly , none, what, youthoughtthatihavepeopleto, follow, me],
    "pfp" : "https://thumbs.dreamstime.com/b/catonblack-simple-cartoon-cat-icon-black-background-vector-illustration-137595320.jpg",
}

const info = new info1();
info.name = Masahiro;
info.name_last = Sakurai;
info.followers = 705000;
info.profile_pic = placeholder;
function likePhoto2() {
    counter2 = counter2 +1
    console.log(counter2)
}
function likePhoto3() {
    counter3 = counter3 + 1
    console.log(counter3)
}
function likePhoto4() {
    counter4 = counter4 + 1
    console.log(counter4)
}
function likePhoto5() {
    counter5 = counter5 + 1
    console.log(counter5)
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

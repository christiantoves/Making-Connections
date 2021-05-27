var count = document.querySelector(".CR-notif").innerText
var count2 = document.querySelector(".YC-num").innerText
function editProfile() {
    document.querySelector("#h1").innerText = "any other name";
}

function removeConnection1(){
    count--;
    document.querySelector(".CR-notif").innerText = count;
    document.querySelector(".toddE").remove();
    count2++;
    document.querySelector(".YC-num").innerText = count2
}

console.log(count)
function removeConnection2(){
    count--;
    document.querySelector(".CR-notif").innerText = count;
    document.querySelector(".philK").remove();
    count2++;
    document.querySelector(".YC-num").innerText = count2;
}
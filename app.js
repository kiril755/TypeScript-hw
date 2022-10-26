var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
//   lesson 2
var age = 50;
var names = "Max";
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) {
    return 100 + a;
};
///////////////////
var anything = -20;
anything = "Text";
anything = {};
////////////////
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
//////////////////
var person = ["Max", 21];
//////////////////
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
var statusBar = {
    status: Load.LOADING
};
if (statusBar.status === Load.LOADING) {
    console.log("Status: ", Load.LOADING);
}
//////////////////
var data;
//////////////////
var statusSting;
////////////////////
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01"
    }
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close"
};

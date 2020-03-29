var saveButton = document.querySelector("#save0");
var saveButton1 = document.querySelector("#save1");
var saveButton2 = document.querySelector("#save2");
var saveButton3 = document.querySelector("#save3");
var saveButton4 = document.querySelector("#save4");
var saveButton5 = document.querySelector("#save5");
// var saveButton = document.querySelector("#save6");

var storedMemo = document.getElementById("storedMemo");
var storedMemo1 = document.getElementById("storedMemo1");
var storedMemo2 = document.getElementById("storedMemo2");
var storedMemo3 = document.getElementById("storedMemo3");
var storedMemo4 = document.getElementById("storedMemo4");
var storedMemo5 = document.getElementById("storedMemo5");

saveButton.addEventListener("click", function(){
    saveMemo("memo", storedMemo);
});

saveButton1.addEventListener("click", function(){
    saveMemo("memo1", storedMemo1);
});

saveButton2.addEventListener("click", function(){
    saveMemo("memo2", storedMemo2);
});

saveButton3.addEventListener("click", function(){
    saveMemo("memo3", storedMemo3);
});

saveButton4.addEventListener("click", function(){
    saveMemo("memo4", storedMemo4);
});

saveButton5.addEventListener("click", function(){
    saveMemo("memo5", storedMemo5);
});


function saveMemo() {
    event.preventDefault();

    console.log(arguments[0])
    var memo = document.getElementById(arguments[0]).value;
    console.log(memo);
    localStorage.setItem(arguments[0], memo);
    renderLastRegistered(arguments[0], arguments[1]);
};


function renderLastRegistered() {
    var memo = localStorage.getItem(arguments[0]);
    console.log(memo);
    if (memo === null) {
        return;
    }
    arguments[1].textContent = memo;
}

renderLastRegistered("memo", storedMemo);
renderLastRegistered("memo1", storedMemo1);
renderLastRegistered("memo2", storedMemo2);
renderLastRegistered("memo3", storedMemo3);
renderLastRegistered("memo4", storedMemo4);
renderLastRegistered("memo5", storedMemo5);
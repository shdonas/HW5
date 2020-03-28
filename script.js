var memoInput = document.querySelector("#memo");
var saveButton = document.querySelector("#save");
var storedMemo = document.querySelector("#storedMemo");

saveButton.addEventListener("click", saveMemo);

function saveMemo() {
    event.preventDefault();

    var memo = document.querySelector("#memo").value;
    localStorage.setItem("memo", memo);
    renderLastRegistered();
};

renderLastRegistered();

function renderLastRegistered() {
    var memo = localStorage.getItem("memo");
    if (memo === null) {
        return;
    }
    storedMemo.textContent = memo;
}
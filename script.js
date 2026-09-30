//your code here!

const list = document.getElementById("list");

let count = 0;

for (let i = 0; i < 10; i++) {
    addItem();
}

function addItem() {
    count++;

    const li = document.createElement("li");
    li.textContent = `Item ${count}`;

    list.appendChild(li);
}

window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        addItem();
        addItem();
    }
});
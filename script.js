//your code here!

const list = document.getElementById("infi-list");

let count = 0;

// Add 10 items initially
for (let i = 0; i < 10; i++) {
    addItem();
}

function addItem() {
    count++;

    const li = document.createElement("li");
    li.innerText = `Item ${count}`;

    list.appendChild(li);
}

// Add 2 items when user reaches the bottom
window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        addItem();
        addItem();
    }
});
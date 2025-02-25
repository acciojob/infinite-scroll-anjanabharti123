//your code here!
document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("infi-list");
    let itemCount = 10; // Start with 10 items

    // Function to add list items
    function addItems(count) {
        for (let i = 0; i < count; i++) {
            let li = document.createElement("li");
            li.textContent = `Item ${itemCount + 1}`;
            list.appendChild(li);
            itemCount++;
        }
    }

    // Initially load 10 items
    addItems(10);

    // Infinite Scroll: Detect when user reaches the bottom
    list.addEventListener("scroll", function () {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            addItems(2); // Add 2 more items
        }
    });
});


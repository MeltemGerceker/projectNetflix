const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

tabItems.forEach(item => item.addEventListener("click", (e) => {

    // 1. remove "active" class from every "tab-item":
    tabItems.forEach(item => item.classList.remove("active"));

    // 2. remove "active" class from every "tab-content-item"
    tabContentItems.forEach(item => item.classList.remove("active"));

    // 3. add "active" class to only the selected "tab-item":
    item.classList.add("active");

    const tabContentItem = document.querySelector(`#${item.id}-content`);
    tabContentItem.classList.add("active");
}));

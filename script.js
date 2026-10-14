const detailButtons = document.querySelectorAll(".detail-btn");
const modal = document.querySelector("#product-modal");
const closeModal = document.querySelector("#close-modal");

const modalName = document.querySelector("#modal-name");
const modalPrice = document.querySelector("#modal-price");
const modalDescription = document.querySelector("#modal-description");
const modalContact = document.querySelector("#modal-contact");
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const faqItem = button.parentElement;

        faqItem.classList.toggle("active");
    });
});

detailButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        modalName.textContent = button.dataset.name;
        modalPrice.textContent = button.dataset.price;
        modalDescription.textContent = button.dataset.description;

        modal.classList.add("active");
    });
});

closeModal.addEventListener("click", function() {
    modal.classList.remove("active");
});

modalContact.addEventListener("click", function() {
    modal.classList.remove("active");
});
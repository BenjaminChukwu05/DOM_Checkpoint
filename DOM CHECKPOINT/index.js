// Get all the necessary elements
const quantityDecreaseButtons = document.querySelectorAll('.quantity-decrease');
const quantityIncreaseButtons = document.querySelectorAll('.quantity-increase');
const quantityElements = document.querySelectorAll('.quantity');
const likeButtons = document.querySelectorAll('.like-button');
const deleteButtons = document.querySelectorAll('.delete-button');
const totalElement = document.getElementById('total-price');

// Initialize total price
let totalPrice = 10; // Assuming the initial price is $10

// Function to update the total price
function updateTotalPrice() {
    let newTotal = 0;
    quantityElements.forEach((quantityElement, index) => {
        const quantity = parseInt(quantityElement.textContent);
        newTotal += quantity * 10; // Assuming each product costs $10
    });
    totalPrice = newTotal;
    totalElement.textContent = `$${newTotal}`;
}

// Event listeners for decreasing quantity
quantityDecreaseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const quantityElement = quantityElements[index];
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        }
    });
});

// Event listeners for increasing quantity
quantityIncreaseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const quantityElement = quantityElements[index];
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
    });
});

// Event listeners for liking items
likeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
    });
});

// Event listeners for deleting items
deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const item = button.closest('.item');
        item.remove();
        updateTotalPrice();
    });
});

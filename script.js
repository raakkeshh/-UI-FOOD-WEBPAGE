document.addEventListener("DOMContentLoaded", function () {
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const checkoutButton = document.getElementById("checkout");
    const paymentModal = document.getElementById("payment-modal");
    const codButton = document.getElementById("cod");
    const upiButton = document.getElementById("upi");
    const qrCode = document.getElementById("qr-code");
    const paymentDone = document.getElementById("payment-done");

    let cartItems = 0;
    let totalPrice = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const foodItem = button.parentElement;
            const price = parseInt(foodItem.dataset.price);

            cartItems++;
            totalPrice += price;

            cartCount.textContent = cartItems;
            cartTotal.textContent = totalPrice;

            // Button Animation
            button.style.backgroundColor = "green";
            setTimeout(() => {
                button.style.backgroundColor = "#ff5733";
            }, 300);
        });
    });

    checkoutButton.addEventListener("click", function () {
        paymentModal.style.display = "flex";
    });

    codButton.addEventListener("click", function () {
        alert("Order Successful! Your food will be delivered soon.");
        paymentModal.style.display = "none";
    });

    upiButton.addEventListener("click", function () {
        qrCode.classList.remove("hidden");
    });

    paymentDone.addEventListener("click", function () {
        alert("Payment Successful! Your order is confirmed.");
        paymentModal.style.display = "none";
    });
});

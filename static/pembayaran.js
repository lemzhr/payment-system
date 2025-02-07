document.addEventListener("DOMContentLoaded", function() {
    const paymentForm = document.getElementById("paymentForm");
    
    if (paymentForm) {
        paymentForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            // Simulate payment processing
            const transactionId = "TXN" + Math.floor(Math.random() * 1000000);
            const amountPaid = "$50.00";
            const paymentMethod = "Selected Payment Method";
            
            // Store details in sessionStorage
            sessionStorage.setItem("transactionId", transactionId);
            sessionStorage.setItem("amountPaid", amountPaid);
            sessionStorage.setItem("paymentMethod", paymentMethod);
            
            // Redirect to receipt page
            window.location.href = "receipt.html";
        });
    }

    // Load receipt details
    if (window.location.pathname.includes("receipt.html")) {
        document.getElementById("transaction-id").textContent = sessionStorage.getItem("transactionId");
        document.getElementById("amount-paid").textContent = sessionStorage.getItem("amountPaid");
        document.getElementById("payment-method").textContent = sessionStorage.getItem("paymentMethod");
    }
});
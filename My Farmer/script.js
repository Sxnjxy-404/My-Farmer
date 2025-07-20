JAVASCRIPT


document.addEventListener('DOMContentLoaded', function() {
    // Login functionality
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Simple validation example
        if (username && password) {
            // Assuming any username and password are valid for demo purposes
            // You might want to replace this with a real authentication method
            alert('Login Successful');
            
            // Redirect to the F2C registration page
            window.location.href = 'registration.html';
        } else {
            alert('Invalid Username or Password. Please try again.');
        }
    });

    // Product purchase functionality
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.product').dataset.name;
            const productPrice = parseFloat(this.closest('.product').dataset.price);
            showQuantityModal(productName, productPrice);
        });
    });

    const quantityModal = document.getElementById('quantity-modal');
    const priceModal = document.getElementById('price-modal');

    const closeQuantityModal = quantityModal.querySelector('.close');
    const closePriceModal = priceModal.querySelector('.close');
    
    closeQuantityModal.addEventListener('click', () => quantityModal.style.display = 'none');
    closePriceModal.addEventListener('click', () => priceModal.style.display = 'none');

    document.getElementById('calculate-btn').addEventListener('click', function() {
        const quantityInput = document.getElementById('quantity-input').value;
        const productPrice = parseFloat(document.getElementById('product-question').dataset.price);
        
        if (quantityInput && !isNaN(quantityInput)) {
            const totalPrice = quantityInput * productPrice;
            document.getElementById('highlighted-price').innerText = `₹${totalPrice.toFixed(2)}`;
            priceModal.style.display = 'block';
        } else {
            alert('Please enter a valid quantity.');
        }
    });
 
    function showQuantityModal(productName, productPrice) {
        document.getElementById('product-question').innerText = `How many kg of ${productName} would you like to buy?`;
        document.getElementById('product-question').dataset.price = productPrice;
        quantityModal.style.display = 'block';
    }

    // Chat icon show/hide functionality
    document.getElementById('chatbot-icon').addEventListener('click', function() {
        const chatContainer = document.getElementById('chat-container');
        chatContainer.style.display = chatContainer.style.display === 'none' || chatContainer.style.display === '' ? 'block' : 'none';
    });

    // Close chat container
    document.getElementById('close-chat').addEventListener('click', function() {
        document.getElementById('chat-container').style.display = 'none';
    });

    // Handle sending messages
    document.getElementById('send-message').addEventListener('click', function() {
        const userInput = document.getElementById('user-input').value;
        if (userInput.trim() !== '') {
            const chatBox = document.getElementById('chat-box');
            
            // Add user message
            const userMessage = document.createElement('div');
            userMessage.className = 'message user-message';
            userMessage.textContent = userInput;
            chatBox.appendChild(userMessage);

            // Add bot response
            const botResponse = document.createElement('div');
            botResponse.className = 'message bot-message';
            botResponse.textContent = getBotResponse(userInput);
            chatBox.appendChild(botResponse);
            
            // Clear user input
            document.getElementById('user-input').value = '';
            
            // Scroll to bottom
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    });

    // Function to generate bot responses
    function getBotResponse(userInput) {
        // Simple responses based on user input
        const responses = {
            'hello': 'Hi there! How can I help you?',
            'how are you': 'I’m here to assist you!',
            'what is your name': 'I’m your friendly chatbot.',
            'help': 'Let me know what you need help with!',
        };

        // Return a response or default message
        return responses[userInput.toLowerCase()] || 'I’m not sure how to respond to that.';
    }
    
    // Menu icon functionality
    var menuIcon = document.getElementById("menu-icon");
    var sidebar = document.getElementById("sidebar");
    var closeBtn = document.getElementById("closebtn");

    // Handle menu icon toggle
    menuIcon.addEventListener("click", function() {
        sidebar.style.width = "250px";
    });

    // Handle closing the sidebar
    closeBtn.addEventListener("click", function() {
        sidebar.style.width = "0";
    });
    
});












// Example for handling registration completion
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Add your registration logic here

    // Redirect to the finish page
    window.location.href = 'finish.html'; // Replace with the actual path to the Finish page
});



 



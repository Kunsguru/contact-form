const adminPassword = '1234'; // Set your admin password here

        let messages = JSON.parse(localStorage.getItem('messages')) || [];

        function saveMessages() {
            localStorage.setItem('messages', JSON.stringify(messages));
        }

        function sendEmailConfirmation(email) {
            // Placeholder function for sending email confirmation
            console.log(`Email confirmation sent to ${email}`);
        }

        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('user_name').value;
            const email = document.getElementById('user_email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            const messageData = {
                name,
                email,
                phone,
                message,
                tag: ''
            };
            messages.push(messageData);
            saveMessages();
            sendEmailConfirmation(email);
            sendEmailConfirmation(email); // Sending a second email confirmation

            document.getElementById('contactForm').reset();

            alert('Message submitted successfully! Redirecting to home page.');
            window.location.href = 'https://artswithartsybasy01.onrender.com/'; // Redirect to the home page
        });

        function displayMessage(message, index) {
            const messagesList = document.getElementById('messagesList');
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span>Name: ${message.name}, Email: ${message.email}, Phone: ${message.phone}, Message: ${message.message} ${message.tag ? '(' + message.tag + ')' : ''}</span>
                <button class="tag-button" onclick="tagMessage(${index}, 'important')">Tag Important</button>
                <button class="tag-button" onclick="tagMessage(${index}, 'normal')">Tag Normal</button>
                <button class="remove-button" onclick="removeMessage(${index})">Remove</button>`;
            messagesList.appendChild(listItem);
        }

        function displayAllMessages() {
            const messagesList = document.getElementById('messagesList');
            messagesList.innerHTML = ''; // Clear previous entries
            messages.forEach(displayMessage);
        }

        document.getElementById('viewMessagesButton').addEventListener('click', function() {
            const password = prompt('Enter the admin password:');
            if (password === adminPassword) {
                displayAllMessages();
                document.getElementById('messagesOverlay').style.display = 'flex';
            } else {
                alert('Incorrect password. Access denied.');
            }
        });

        document.getElementById('closeMessagesOverlayButton').addEventListener('click', function() {
            document.getElementById('messagesOverlay').style.display = 'none';
        });

        function tagMessage(index, tag) {
            messages[index].tag = tag;
            saveMessages();
            displayAllMessages();
        }

        function removeMessage(index) {
            messages.splice(index, 1);
            saveMessages();
            displayAllMessages();
        }

        document.getElementById('homeButton').addEventListener('click', function() {
            window.location.href = 'https://artswithartsybasy01.onrender.com/'; // Adjust the URL to the correct path for your home page
        });

        // Initial call to display messages
        document.addEventListener('DOMContentLoaded', displayAllMessages);


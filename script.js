document.getElementById('summitButton').addEventListener('click', function() {
    var email = 'artsbasseyartsbassey@gmail.com';
    var subject = 'Help Desk';
    var body = 'Hello,\n\nYou want  to make an inquiry?.\n\nI am here to help you.';
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    
    window.location.href = mailtoLink;
});

alert('Message submitted successfully! Redirecting to home page.');
            window.location.href = 'https://aaartswithartsbasy2024.onrender.com/'; // Redirect to the home page
        });





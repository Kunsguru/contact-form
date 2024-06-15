document.getElementById('summitButton').addEventListener('click', function() {
    var email = 'artsbasseyartsbassey@gmail.com';
    var subject = 'Help desk';
    var body = 'Hello,\n\n.
        

            I'm Mike,\n,\n.
    How can I be of help to you?,\n\n.
        
        
    
Thank you.';
    
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    
    window.location.href = mailtoLink;
});



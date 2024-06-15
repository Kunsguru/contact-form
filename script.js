document.getElementById('summitButton').addEventListener('click', function() {
    var email = 'artsbasseyartsbassey@gmail.com';
    var subject = 'Help Desk';
    var body = 'Hello,\n\I would like to make an inquiry more?.\n\nThank you.';
    
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    
    window.location.href = mailtoLink;
});






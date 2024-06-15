document.getElementById('summitButton').addEventListener('click', function() {
    var email = 'artsbasseyartsbassey@gmail.com';
    var subject = 'Help Desk';
    var body = 'Hello,\n\nYou want  to make an inquiry?.\n\nI am here to help you.';
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    
    window.location.href = mailtoLink;
});






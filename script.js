document.getElementById('summitButton').addEventListener('click', function() {
    var email = 'artsbasseyartsbassey@gmail.com';
    var subject = 'Help Desk';
    var body = 'Hello,\n\I'm Mike.\n\
  I would like to help you answer your questions?.\n\nThank you.';
    
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    
    window.location.href = mailtoLink;
});






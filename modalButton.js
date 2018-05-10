$('#modalSubscriptionForm').modal()
$('document').ready(function() {
    $('.btn-signup').on('click', function(e) {
        var longSend = $('.btn-signup');

        var nameValue = $('#name').val();
        var emailValue = $('#email').val();

        longSend.text('Sending...');
        $(this).attr('disabled', 'disabled');

        emailjs.send("krissyconant_gmail_com","slopey_seconds", {
            name: nameValue,
            email: emailValue,
        })

        .then(function(response) {
        $('.modal-body').append('<div class="thankYou" align="center">Thanks for signing up!</div>');
        })

        .then(function(response) {
            window.setTimeout(function() {
                $('#modalSubscriptionForm').modal('hide'); 
            }, 1000)
            
        $(this).attr('disabled', '');
        }, function(err) {
            alert('Submission failed - please try again!')
        });

        $('#modalSubscriptionForm').on('hidden.bs.modal', function (e) {           
            location.reload();
            $('#modalSubscriptionForm').show();
        })
    });
});
        
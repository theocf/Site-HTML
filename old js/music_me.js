$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behaviour
            $("#btnSubmit").attr("disabled", true);
            event.preventDefault();
            
            // get values from FORM
            var nome = $("input#nome").val();
            var mensagem = $("textarea#mensagem").val();
            var firstName = nome; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = nome.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/mensagem.php",
                type: "POST",
                data: {
                    nome: nome,
                    mensagem: mensagem
                },
                cache: false,
                success: function() {
                    // Enable button & show success message
                    $("#btnSubmit").attr("disabled", false);
                    $('#success-msg').html("<div class='alert alert-success'>");
                    $('#success-msg > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success-msg > .alert-success')
                        .append("Sua mensagem foi enviada. Obrigado!");
                    $('#success-msg > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success-msg').html("<div class='alert alert-danger'>");
                    $('#success-msg > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success-msg > .alert-danger').append("Ops, algo deu errado. Por favor, tente novamente.");
                    $('#success-msg > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

// When clicking on Full hide fail/success boxes
$('#nome').focus(function() {
    $('#success-msg').html('');
});

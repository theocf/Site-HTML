$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behaviour
            $("#submit-con").attr("disabled", true);
            event.preventDefault();
            
            // get values from FORM
            var simounao = $("input#radios").val();
            var convidados = $("textarea#convidados").val();
            $.ajax({
                url: "././mail/confirmacao.php",
                type: "POST",
                data: {
                    radios: radios,
                    convidados: convidados
                },
                cache: false,
                success: function() {
                    // Enable button & show success message
                    $("#submit-con").attr("disabled", false);
                    $('#success-con').html("<div class='alert alert-success'>");
                    $('#success-con > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success-con > .alert-success')
                        .append("Sua mensagem foi enviada. Obrigado!");
                    $('#success-con > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#confirmForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success-con').html("<div class='alert alert-danger'>");
                    $('#success-con > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success-con > .alert-danger').append("Ops, algo deu errado. Por favor, tente novamente.");
                    $('#success-con > .alert-danger').append('</div>');
                    //clear all fields
                    $('#confirmForm').trigger("reset");
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
$('#convidados').focus(function() {
    $('#success-con').html('');
});

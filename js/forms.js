$(function() {

    // Form Mensagens
    function submitContactForm() {

        // get values from FORM
        var nome = $("input#nome").val();
        var mensagem = $("textarea#mensagem").val();

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
                $("#submit-msg").attr("disabled", false);
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
        // When clicking on Full hide fail/success boxes
        $('#nome').focus(function() {
            $('#success-msg').html('');
        });
    }
    
    // Form Confirmacao
    function submitConfirmForm() {

        // get values from FORM
        var simounao = $('input[name="radios"]:checked').val();
        var convidados = $("textarea#convidados").val();

        $.ajax({
            url: "././mail/confirmacao.php",
            type: "POST",
            data: {
                simounao: simounao,
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
                    .append("Seu RSVP foi enviado. Obrigado!");
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
        // When clicking on Full hide fail/success boxes
        $('#convidados').focus(function() {
            $('#success-con').html('');
        });
    }

    // Form Musica
    function submitMusicForm() {

        // get values from FORM
        var artista = $("input#artista").val();
        var musica = $("textarea#musica").val();

        $.ajax({
            url: "././mail/musica.php",
            type: "POST",
            data: {
                artista: artista,
                musica: musica
            },
            cache: false,
            success: function() {
                // Enable button & show success message
                $("#submit-mus").attr("disabled", false);
                $('#success-mus').html("<div class='alert alert-success'>");
                $('#success-mus > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success-mus > .alert-success')
                    .append("Sugestão enviada. Obrigado!");
                $('#success-mus > .alert-success')
                    .append('</div>');

                //clear all fields
                $('#musicForm').trigger("reset");
            },
            error: function() {
                // Fail message
                $('#success-mus').html("<div class='alert alert-danger'>");
                $('#success-mus > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success-mus > .alert-danger').append("Ops, algo deu errado. Por favor, tente novamente.");
                $('#success-mus > .alert-danger').append('</div>');
                //clear all fields
                $('#musicForm').trigger("reset");
            },
        })
        // When clicking on Full hide fail/success boxes
        $('#artista').focus(function() {
            $('#success-mus').html('');
        });
    }


    $("input,textarea").not("[type=submit]").jqBootstrapValidation({
        preventSubmit: true,

        submitError: function($form, event, errors) {
            console.log('Erro no form: ' + $form[0].id);
            // additional error messages or events
        },
        submitSuccess: function($form, event) {

            event.preventDefault();
            
            if ($form[0].id === 'contactForm') submitContactForm();

            if ($form[0].id === 'confirmForm') submitConfirmForm();
            
            if ($form[0].id === 'musicForm') submitMusicForm();

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


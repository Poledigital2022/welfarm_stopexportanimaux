(function ($) {
    $(document).ready(function () {

        $("#form").validate({
            showErrors: function(errorMap, errorList) {}
        });

        $('#form').on('submit', function(e){
            e.preventDefault();
            var $form = $(this);

            if ($form.valid()) {
                $.ajax({
                    type: 'POST',
                    cache: false,
                    url: window.location.href.split('?')[0] + '/actions/form_submit.php',
                    dataType: 'json',
                    data: $('#form').serialize()
                }).complete(function(response) {
                    if (response.responseJSON.success == true) {
                        $(".form-errors").html("");
                        $("#modal-merci").addClass('active').siblings('.js-modal').removeClass('active');
                        $('.signature').html(1 + parseInt($('.signature').html()));
                          gtag('event', 'signeStopExport', {
                              'event_category': 'signeStopExport',
                              'event_label': 'signeStopExport',
                              'value': 'signeStopExport'
                          });

                    }
                });
            } else {
                $(".form-errors").html("Merci d'indiquer votre Nom, prénom et adresse e-mail pour signer la pétition");
            }

        });

    });
})(jQuery);

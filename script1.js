$(document).ready(function () {


    $("input").tooltip('hide')

    $("form").submit(function () {
        var inputPseudoLength = $("#pseudo").val().length
        var inputPassword1Length = $("#password1").val().length
        var inputPassword2Length = $("#password2").val().length
        var inputMailLength = $("#mail").val().length

        if (inputPseudoLength < 5) {
            $("#pseudo").tooltip("show")
        } else {
            $("#pseudo").tooltip('hide')
        }

        if (inputPassword1Length < 5 ) {
            $("#password1").tooltip("show")
        } else {
            $("#password1").tooltip('hide')
        }

        if (inputPassword2Length < 5) {
            $("#password2").tooltip("show")
        } else {
            $("#password2").tooltip('hide')
        }

        if (inputMailLength < 5 ) {
            $("#mail").tooltip("show")
        } else {
            $("#mail").tooltip('hide')
        }

        if ($('#password1').val() != $('#password2').val()) {
            $('#password2').tooltip("hide")
            $('#password2').prop("title", "Not identical password")
            $('#password2').tooltip("show")
        }

        isValidEmailAddress();


        function isValidEmailAddress() {
            var emailAddress = $("#mail").val()
            var pattern = new RegExp (/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i);
            if (!pattern.test(emailAddress)) {
                $('#mail').tooltip("hide")
                $('#mail').prop("title", "Invalid character")
                $('#mail').tooltip("show")
            }
        }


        return false
    })
})


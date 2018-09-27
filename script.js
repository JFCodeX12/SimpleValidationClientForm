$("form").submit(function (e) {

    var error = "";

    if ($(".inputName").val() == "") {
        error += "The <strong>name</strong> field is required.<br />";
    }
    if ($(".inputEmail").val() == "") {
        error += "The <strong>email</strong> filed is required.<br />";
    }
    if ($(".inputMessage").val() == "") {
        error += "The <strong>message</strong> field is required.<br />";
    }

    if (error != "") {
        $(".error").html('<div class="alert alert-danger" role="alert"><p><strong>There were error(s) in your form:</strong></p>' + error + '</div>');
        return false;
    } else {
        return true;
    }
});
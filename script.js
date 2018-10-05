$("form").submit(function (e) {
    /*
     * Container for three error string    
     */
    var error = "";

    if ($(".inputName").val() == "") { //Compare val of input text (name)
        //  Error string in var "error"
        error += "The <strong>name</strong> field is required.<br />";
    }
    if ($(".inputEmail").val() == "") { //Compare val of input text (email)
        error += "The <strong>email</strong> filed is required.<br />";
    }
    if ($(".inputMessage").val() == "") { //Comapre val of textarea (message)
        error += "The <strong>message</strong> field is required.<br />";
    }

    if (error != "") {
        $("form").toggleClass('hidden'); //hide form
        $(".error").toggleClass('show'); //show error div
        //  Message error with bootstrap style
        $(".error").html('<div class="alert alert-danger" role="alert"><p><strong>There were error(s) in your form:</strong></p>' + error +
            '<div class="container_errorButton">' +
            '<button type="submit" class="btn btn-danger reload"><span class="textButton_reload">Reload</span>' +
            '<i class="fa fa-refresh" aria-hidden="true"></i></button></div> </div>');
        //  When click button, hide the error div and reload the form
        $(".reload").click(function (e) {
            $(".error").toggleClass('hidden');
            location.reload();
        });
        return false;
    } else {
        return true;
    }
});
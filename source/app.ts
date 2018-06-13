$(function () {

    try {
        var router = new routeChat();
    }
    catch(e) {
        console.log('stopped at router initialisation');
        return false;
    }


    $('#user').on('blur', function() {
        router.logUser(sanitiseToString('user'));
    });

    $('#user').on('keydown', function(e) {
        if (e.which == 13)
            router.logUser(sanitiseToString('user'));
    });

    $('#textInput').on('blur', function() {
        if (router.sendMessage(sanitiseToString('textInput')) == false)
            console.log('Could not send message');
    });

    $('#textInput').on('keydown', function(e) {
        if (e.which == 13)
            if (router.sendMessage(sanitiseToString('textInput')) == false)
                console.log('Could not send message');
    });

    function sanitiseToString(inputId : string):string {

        let input = $('#'+inputId).val();

        if (typeof input == 'string')
            return input;
        else
            return '';
    }
});
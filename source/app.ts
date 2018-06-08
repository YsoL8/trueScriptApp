$(function () {
    let router = new routeChat();

    $('#user').on('blur', function() {
        router.logUser(sanitiseToString('user'));
    });

    $('#user').on('keydown', function(e) {
        if (e.which == 13)
            router.logUser(sanitiseToString('user'));
    });

    $('#textInput').on('blur', function() {
        router.sendMessage(sanitiseToString('textInput'));
    });

    $('#textInput').on('keydown', function(e) {
        if (e.which == 13)
            router.sendMessage(sanitiseToString('textInput'));
    });

    function sanitiseToString(inputId : string):string {

        let input = $('#'+inputId).val();

        if (typeof input == 'string')
            return input;
        else
            return '';
    }
});
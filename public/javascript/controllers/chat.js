var controllerChat = (function () {
    function controllerChat() {
    }
    controllerChat.prototype.writeMessage = function (message, author) {
        var loggable = new modelChat();
        var foo = loggable.author;
        return loggable;
    };
    controllerChat.prototype.getMessage = function () {
        return 'boo';
    };
    return controllerChat;
}());
//# sourceMappingURL=chat.js.map
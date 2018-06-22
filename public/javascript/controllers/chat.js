var controllerChat = (function () {
    function controllerChat() {
        this.storage = null;
        try {
            this.storage = new storageEmulationController(true);
        }
        catch (e) {
            throw new Error('Cannot write chatlog');
        }
    }
    controllerChat.prototype.writeMessage = function (message, author) {
        if (!author || !this.storage) {
            return false;
        }
        var loggable = new modelChat();
        loggable.author = author.user;
        loggable.creation = new Date();
        loggable.content = message;
        this.storage.insert(loggable);
        return loggable;
    };
    controllerChat.prototype.getMessage = function () {
        return 'boo';
    };
    return controllerChat;
}());
//# sourceMappingURL=chat.js.map
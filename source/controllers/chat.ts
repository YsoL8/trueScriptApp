class controllerChat {
    writeMessage(message: string, author: modelAccount):modelChat {
        let loggable = new modelChat();
        let foo = loggable.author;

        return loggable;
    }
    getMessage() {
        return 'boo';
    }
}
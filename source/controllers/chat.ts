class controllerChat {

    storage : storageEmulationController | null = null;

    constructor() {

        try {
            this.storage = new storageEmulationController();
        }
        catch (e) {
            throw new Error('Cannot write chatlog');
        }

    }

    writeMessage(message: string, author: modelAccount | null):modelChat | boolean {

        if (!author || !this.storage) {
            return false;
        }

        let loggable = new modelChat();
        loggable.author = author.user;
        loggable.creation = new Date();
        loggable.content = message;

        this.storage.insert(loggable);

        return loggable;
    }
    getMessage() {
        return 'boo';
    }
}
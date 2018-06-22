class routeChat {
    chatControl : controllerChat | null = null;
    sessionUser : modelAccount | null = null;

    constructor() {

        try {
            this.chatControl = new controllerChat();
        }
        catch (e) {
            throw new Error('Failed to initialise controllers');
        }

    }

    logUser(user : string):boolean {
        this.sessionUser = new modelAccount();
        this.sessionUser.user = user;

        return true;
    }

    getMessages():boolean {
        console.log('clock is running');

        return true;
    }

    sendMessage(message: string):boolean {

        if (this.chatControl && this.sessionUser) {
            this.chatControl.writeMessage(message, this.sessionUser);

            return true;
        }

        return false;
    }
}
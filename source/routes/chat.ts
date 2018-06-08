class routeChat {
    chatControl : controllerChat = new controllerChat();
    sessionUser : modelAccount | null = null;

    logUser(user : string):boolean {
        this.sessionUser = new modelAccount();
        this.sessionUser.user = user;

        return true;
    }

    getMessages() {

    }
    sendMessage(message: string):boolean {
        console.log('sending');

        return true;
    }
}
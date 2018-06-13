/**
 * In a real world application this would be handled over sockets to a db or redis based backend
 */
class storageEmulationController {

    db : IDBDatabase | null = null;

    constructor () {
        let self : storageEmulationController  = this;

        if (!window.indexedDB) {
            throw new Error('Local storage is not supported by the browser.');
        }

        let request = window.indexedDB.open("siteDB", 3);
        request.onerror = (event) => {
            throw new Error('Failed to open local db.');
        };
        request.onupgradeneeded = (event : IDBVersionChangeEvent) => { //if this version of the db is not setup locally
            let db = request.result;

            //for now just assume the db needs creating from scratch
            let chatStore = db.createObjectStore('chat', {autoIncrement : true});

            let accountStore = db.createObjectStore('account', {autoIncrement : true});
            accountStore.createIndex('usernameIndex', 'user', {unique : true});
        };
        request.onsuccess = (event : Event & { target: { result: IDBDatabase }}) => { //db object is ready and valid
            self.db = event.target.result;
        };
    }

    insert(data : object) : boolean | object {
        if (!this.db) { //possible race condition?
            return false;
        }

        let transaction : IDBTransaction | null = null;
        let table : IDBObjectStore | null = null;

        if (data instanceof modelAccount) {
            transaction = this.db.transaction('account', 'readwrite');
            table = transaction.objectStore('account');
        }

        if (data instanceof modelChat) {
            transaction = this.db.transaction('chat', 'readwrite');
            table = transaction.objectStore('chat');
        }

        if (!table) {
            return false;
        }
        table.add(data);
        return true;
    }

}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureConnection = exports.ConnectionDecorator = void 0;
class ConnectionDecorator {
    constructor(connection) {
        this.wrapped = connection;
    }
    get id() {
        return this.wrapped.id;
    }
    connect() {
        this.wrapped.connect();
    }
    disconnect() {
        this.wrapped.disconnect();
    }
    sendData(data) {
        this.wrapped.sendData(data);
    }
}
exports.ConnectionDecorator = ConnectionDecorator;
class SecureConnection extends ConnectionDecorator {
    sendData(data) {
        const encryptedData = `[ENCRIPTADO] ${data.split('').reverse().join('')}`;
        console.log(`🔒 Encriptando datos para ${this.id}...`);
        super.sendData(encryptedData);
    }
}
exports.SecureConnection = SecureConnection;

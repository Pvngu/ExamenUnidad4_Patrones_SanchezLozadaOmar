"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkService = void 0;
const connection_manager_1 = require("./connection-manager");
const connection_decorator_1 = require("./connection-decorator");
class NetworkService {
    constructor() {
        this.manager = connection_manager_1.ConnectionManager.getInstance();
    }
    sendSecureMessage(message) {
        const conn = this.manager.getConnection();
        if (conn) {
            const secureConn = new connection_decorator_1.SecureConnection(conn);
            secureConn.sendData(message);
            this.manager.releaseConnection(conn);
        }
        else {
            console.error("No hay conexiones disponibles para envío seguro.");
        }
    }
    sendStandardMessage(message) {
        const conn = this.manager.getConnection();
        if (conn) {
            conn.sendData(message);
            this.manager.releaseConnection(conn);
        }
        else {
            console.error("No hay conexiones disponibles.");
        }
    }
}
exports.NetworkService = NetworkService;

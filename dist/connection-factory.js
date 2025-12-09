"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardConnectionFactory = exports.ConnectionFactory = void 0;
const connection_1 = require("./connection");
class ConnectionFactory {
}
exports.ConnectionFactory = ConnectionFactory;
class StandardConnectionFactory extends ConnectionFactory {
    createConnection() {
        return new connection_1.Connection();
    }
}
exports.StandardConnectionFactory = StandardConnectionFactory;

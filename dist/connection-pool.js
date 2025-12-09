"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionPool = void 0;
const connection_factory_1 = require("./connection-factory");
class ConnectionPool {
    constructor() {
        this.available = [];
        this.inUse = [];
        this.MAX_POOL_SIZE = 5;
        this.factory = new connection_factory_1.StandardConnectionFactory();
        for (let i = 0; i < this.MAX_POOL_SIZE; i++) {
            this.available.push(this.factory.createConnection());
        }
    }
    acquire() {
        if (this.available.length > 0) {
            const conn = this.available.pop();
            this.inUse.push(conn);
            return conn;
        }
        return null;
    }
    release(conn) {
        const index = this.inUse.indexOf(conn);
        if (index !== -1) {
            this.inUse.splice(index, 1);
            this.available.push(conn);
            console.log(`↩️ Conexión ${conn.id} liberada.`);
        }
    }
}
exports.ConnectionPool = ConnectionPool;

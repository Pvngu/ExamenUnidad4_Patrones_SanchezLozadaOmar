"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionManager = void 0;
const connection_pool_1 = require("./connection-pool");
class ConnectionManager {
    constructor() {
        console.log("Inicializando Connection Manager (Singleton)...");
        this.pool = new connection_pool_1.ConnectionPool();
    }
    static getInstance() {
        if (!ConnectionManager.instance) {
            ConnectionManager.instance = new ConnectionManager();
        }
        return ConnectionManager.instance;
    }
    getConnection() {
        return this.pool.acquire();
    }
    releaseConnection(conn) {
        this.pool.release(conn);
    }
}
exports.ConnectionManager = ConnectionManager;

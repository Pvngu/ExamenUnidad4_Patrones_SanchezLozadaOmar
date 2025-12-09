"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionPool = void 0;
const connection_1 = require("./connection");
class ConnectionPool {
    constructor() {
        this.available = [];
        this.inUse = [];
        this.MAX_POOL_SIZE = 5;
        for (let i = 0; i < this.MAX_POOL_SIZE; i++) {
            this.available.push(new connection_1.Connection());
        }
    }
    acquire() {
        if (this.available.length > 0) {
            const conn = this.available.pop();
            this.inUse.push(conn);
            console.log(`✅ Conexión ${conn.id} adquirida. Estado del pool: ${this.available.length} disponibles, ${this.inUse.length} en uso.`);
            return conn;
        }
        else {
            console.warn("⚠️ No hay conexiones disponibles en el pool.");
            return null;
        }
    }
    release(conn) {
        const index = this.inUse.indexOf(conn);
        if (index !== -1) {
            this.inUse.splice(index, 1);
            this.available.push(conn);
            console.log(`↩️ Conexión ${conn.id} liberada. Estado del pool: ${this.available.length} disponibles, ${this.inUse.length} en uso.`);
        }
        else {
            console.error(`🔥 Error: Intentando liberar una conexión (${conn.id}) que no está en uso.`);
        }
    }
}
exports.ConnectionPool = ConnectionPool;

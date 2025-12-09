import { Connection } from './connection';

export class ConnectionPool {
    private available: Connection[] = [];
    private inUse: Connection[] = [];
    private readonly MAX_POOL_SIZE = 5;

    constructor() {
        for (let i = 0; i < this.MAX_POOL_SIZE; i++) {
            this.available.push(new Connection());
        }
    }

    public acquire(): Connection | null {
        if (this.available.length > 0) {
            const conn = this.available.pop()!;
            this.inUse.push(conn);
            console.log(`✅ Conexión ${conn.id} adquirida. Estado del pool: ${this.available.length} disponibles, ${this.inUse.length} en uso.`);
            return conn;
        } else {
            console.warn("⚠️ No hay conexiones disponibles en el pool.");
            return null;
        }
    }

    public release(conn: Connection): void {
        const index = this.inUse.indexOf(conn);
        if (index !== -1) {
            this.inUse.splice(index, 1);
            this.available.push(conn);
            console.log(`↩️ Conexión ${conn.id} liberada. Estado del pool: ${this.available.length} disponibles, ${this.inUse.length} en uso.`);
        } else {
            console.error(`🔥 Error: Intentando liberar una conexión (${conn.id}) que no está en uso.`);
        }
    }
}
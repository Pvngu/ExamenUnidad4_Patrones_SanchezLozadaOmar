import { IConnection } from '../connection';
import { ConnectionFactory, StandardConnectionFactory } from '../patterns/factory/connection-factory';

export class ConnectionPool {
    private available: IConnection[] = [];
    private inUse: IConnection[] = [];
    private readonly MAX_POOL_SIZE = 5;
    private factory: ConnectionFactory;

    constructor() {
        this.factory = new StandardConnectionFactory();
        for (let i = 0; i < this.MAX_POOL_SIZE; i++) {
            this.available.push(this.factory.createConnection());
        }
    }

    public acquire(): IConnection | null {
        if (this.available.length > 0) {
            const conn = this.available.pop()!;
            this.inUse.push(conn);
            return conn;
        }
        return null;
    }

    public release(conn: IConnection): void {
        const index = this.inUse.indexOf(conn);
        if (index !== -1) {
            this.inUse.splice(index, 1);
            this.available.push(conn);
            console.log(`↩️ Conexión ${conn.id} liberada.`);
        }
    }
}
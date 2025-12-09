import { IConnection } from './connection';
import { ConnectionPool } from './connection-pool';

export class ConnectionManager {
    private static instance: ConnectionManager;
    private pool: ConnectionPool;

    private constructor() {
        console.log("Inicializando Connection Manager (Singleton)...");
        this.pool = new ConnectionPool();
    }

    public static getInstance(): ConnectionManager {
        if (!ConnectionManager.instance) {
            ConnectionManager.instance = new ConnectionManager();
        }
        return ConnectionManager.instance;
    }

    public getConnection(): IConnection | null {
        return this.pool.acquire();
    }

    public releaseConnection(conn: IConnection): void {
        this.pool.release(conn);
    }
}
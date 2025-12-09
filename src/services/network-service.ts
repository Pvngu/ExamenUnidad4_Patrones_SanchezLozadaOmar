import { ConnectionManager } from '../infrastructure/manager/connection-manager';
import { SecureConnection } from '../infrastructure/patterns/decorator/connection-decorator';

export class NetworkService {
    private manager: ConnectionManager;

    constructor() {
        this.manager = ConnectionManager.getInstance();
    }

    public sendSecureMessage(message: string): void {
        const conn = this.manager.getConnection();
        if (conn) {
            const secureConn = new SecureConnection(conn);
            secureConn.sendData(message);
            
            this.manager.releaseConnection(conn);
        } else {
            console.error("No hay conexiones disponibles para envío seguro.");
        }
    }

    public sendStandardMessage(message: string): void {
        const conn = this.manager.getConnection();
        if (conn) {
            conn.sendData(message);
            this.manager.releaseConnection(conn);
        } else {
            console.error("No hay conexiones disponibles.");
        }
    }
}
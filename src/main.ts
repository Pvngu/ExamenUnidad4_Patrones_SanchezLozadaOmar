import { NetworkService } from './network-service';

const networkService = new NetworkService();

console.log("\n--- Prueba 1: Envío Estándar ---");
networkService.sendStandardMessage("Hola Mundo (Texto plano)");

console.log("\n--- Prueba 2: Envío Seguro ---");
networkService.sendSecureMessage("Datos Confidenciales (Encriptados)");

console.log("\n--- Prueba 3: Gestión de Estado ---");

import { ConnectionManager } from './connection-manager';
const manager = ConnectionManager.getInstance();
const conn = manager.getConnection();

if (conn) {
    conn.disconnect();
    conn.sendData("Intento fallido");
    conn.connect();
    conn.sendData("Ahora sí funciona");
    manager.releaseConnection(conn);
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const network_service_1 = require("./network-service");
const networkService = new network_service_1.NetworkService();
console.log("\n--- Prueba 1: Envío Estándar ---");
networkService.sendStandardMessage("Hola Mundo (Texto plano)");
console.log("\n--- Prueba 2: Envío Seguro ---");
networkService.sendSecureMessage("Datos Confidenciales (Encriptados)");
console.log("\n--- Prueba 3: Gestión de Estado ---");
const connection_manager_1 = require("./connection-manager");
const manager = connection_manager_1.ConnectionManager.getInstance();
const conn = manager.getConnection();
if (conn) {
    conn.disconnect();
    conn.sendData("Intento fallido");
    conn.connect();
    conn.sendData("Ahora sí funciona");
    manager.releaseConnection(conn);
}

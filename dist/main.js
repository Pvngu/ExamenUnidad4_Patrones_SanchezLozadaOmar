"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const network_service_1 = require("./network-service");
const networkService = new network_service_1.NetworkService();
console.log("\nPrueba 1: Envío Estándar");
networkService.sendStandardMessage("Hola Mundo (Texto plano)");
console.log("\nPrueba 2: Envío Seguro");
networkService.sendSecureMessage("Datos Confidenciales (Encriptados)");
console.log("\nPrueba 3: Gestión de Estado");
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
const conn2 = manager.getConnection();
if (conn2) {
    conn2.sendData("Mensaje desde una nueva conexión");
    // manager.releaseConnection(conn2);
    // conn2.disconnect();
}
const conn3 = manager.getConnection();
if (conn3) {
    conn3.sendData("Otro mensaje desde una conexión reutilizada");
    manager.releaseConnection(conn3);
}

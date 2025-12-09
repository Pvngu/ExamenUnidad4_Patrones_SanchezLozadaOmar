"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_manager_1 = require("./connection-manager");
const manager = connection_manager_1.ConnectionManager.getInstance();
const manager2 = connection_manager_1.ConnectionManager.getInstance();
console.log("\n--- Solicitando 3 conexiones ---");
const conn1 = manager.getConnection();
const conn2 = manager.getConnection();
const conn3 = manager.getConnection();
if (conn1) {
    conn1.sendData("Primer paquete de datos");
}
if (conn2) {
    conn2.sendData("Segundo paquete de datos");
}
console.log("\n--- Liberando una conexión (conn1) ---");
if (conn1) {
    manager2.releaseConnection(conn1);
}
console.log("\n--- Solicitando una nueva conexión ---");
const conn4 = manager.getConnection();
if (conn4) {
    conn4.sendData("Tercer paquete de datos usando una conexión reutilizada");
}
console.log("\n--- Liberando todas las conexiones restantes ---");
if (conn2)
    manager.releaseConnection(conn2);
if (conn3)
    manager.releaseConnection(conn3);
if (conn4)
    manager.releaseConnection(conn4);
console.log("\n--- Intentando solicitar más conexiones de las disponibles ---");
const allConnections = [];
for (let i = 0; i < 6; i++) {
    console.log(`Solicitud #${i + 1}`);
    allConnections.push(manager.getConnection());
}

Alumno: Omar Sanchez Lozada

Proyecto: Monitoreo de conexiones y rendimiento de red

Descripción:
Este proyecto demuestra el patrón Singleton aplicado a un gestor de conexiones (ConnectionManager)
que administra un pool de conexiones (ConnectionPool). Incluye clases para representar conexiones,
adquirir y liberar conexiones desde el pool, y un ejemplo en src/main.ts que solicita, usa y libera
conexiones para mostrar cómo se reutilizan los recursos.

Estructura:
- src/main.ts: Punto de entrada de la aplicación.
- src/connection.ts: Implementación de la conexión (Connection).
- src/connection-pool.ts: Pool de conexiones (ConnectionPool).
- src/connection-manager.ts: Singleton que expone acquire/release a través del pool.

Cómo ejecutar:
1. Instalar dependencias: npm install
2. Compilar: npm run build
3. Ejecutar: npm start

Alternativamente usar ts-node para ejecutar sin compilar:
- npm run dev
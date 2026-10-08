# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.


## Implementación de las instrucciones (octubre de 2026)

La página se identifica como demostración, tiene navegación a secciones existentes y un formulario de cita ficticia que solo pide opciones de ejemplo. No realiza reservas ni recoge información médica. Se sustituyeron las reseñas flotantes por información de la demo, y las cifras de pacientes/experiencia por características de la interfaz. prisma/schema.prisma y prisma.config.ts conservan la configuración existente sin migrar bases. salud-demo/dev.db se retiró del índice y está ignorado; el archivo local se conserva y el historial previo no fue purgado.

La interfaz admite Español / English desde un selector accesible. Se recuerda la elección cuando el navegador permite almacenamiento; sin elección usa un idioma soportado del navegador y español como alternativa. Se actualizan lang, título y descripción. El cambio conserva rutas, filtros, carrito y campos. Los catálogos están en src/site/catalog.json; las claves son estables y las traducciones de contenido existente no modifican identificadores, precios ni bases de negocio. Contenido procedente de la API fuera del catálogo se conserva: nuevos productos o mensajes requieren sus traducciones correspondientes.

### Instalación y verificación

Desde salud-demo/:

```powershell
npm ci
npm run dev
npm run lint
npm run build
npm run test:i18n
npm run test:analytics
```

En entornos Windows donde el empaquetador de la configuración de Vite da Access is denied, se verificó npm run build -- --configLoader runner; esto no modifica el stack ni sus dependencias.

### Analítica y límites

Consulta [contrato, variables, ejecución, persistencia y copias de seguridad](../analytics/README.md). El servicio SQLite y sus pruebas están en analytics/ en la raíz del repositorio. Analítica desactivada hasta configurar su URL. La persistencia de producción, HTTPS y el alojamiento están pendientes de confirmar; no se publicaron cambios ni se contrataron servicios.

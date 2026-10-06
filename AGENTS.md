# AGENTS.md — Salud-Demo

Instrucciones para trabajar en FujimaruR/Salud-Demo. Alcance: todo este repositorio.

## Contexto del proyecto
Aplicación en salud-demo/ con React, TypeScript, Vite, formularios React Hook Form/Zod y dependencias Express/Prisma. Desde salud-demo/ ejecuta npm run lint (Oxlint) y npm run build (incluye TypeScript). prisma/schema.prisma declara SQLite pero no contiene modelos; esto no prueba que exista analítica operativa. Inspecciona prisma.config.ts y código del servidor antes de implementar. Hay un dev.db versionado: no leas ni publiques datos reales y no lo uses como BD de producción; prepara después una limpieza revisable y exclusiones. Nunca registres síntomas, consultas médicas, datos de pacientes o contenido de formularios en analítica. Conserva instrucciones locales pertinentes de herramientas existentes.

## Propósito de demo para clientes
- Este proyecto es una demo que posibles clientes pueden explorar para valorar un desarrollo de Yair. No representa por defecto una empresa real ni un servicio operativo.
- Quedan por definir el diseño del frontend, identidad visual, páginas, contenido, interacciones y alcance funcional. El código existente es un punto de partida, no una especificación final aprobada.
- Antes de implementar una nueva etapa, concreta una propuesta de interfaz y flujo apropiada al sector; distingue decisiones confirmadas, propuestas y pendientes. Reutiliza el stack existente cuando corresponda.
- Identifica el sitio como demostración. Permite datos ficticios claramente etiquetados para mostrar la interfaz; nunca los presentes como clientes, testimonios, acreditaciones o resultados reales.
- Distingue formularios simulados de solicitudes reales. Una simulación debe indicarlo y no generar reservas, cobros ni comunicaciones reales. Registra sus eventos separadamente de conversiones comerciales reales.
- El destino comercial general es Clients_Yair. Añade un enlace de interés o contacto únicamente cuando exista una URL confirmada; no inventes direcciones de despliegue.
- Conserva los requisitos de español/inglés, analítica SQLite persistente, accesibilidad y verificación. Documenta lo implementado y lo que aún falta definir.

## Forma de trabajar
- Comunica y explica los cambios en español, con ejemplos útiles para aprender.
- Inspecciona el código, los manifiestos, lockfiles, configuración de hosting y otros AGENTS.md antes de editar. Las instrucciones más específicas del directorio aplican a sus archivos.
- Estos requisitos describen el objetivo del proyecto, no funciones ya implementadas. Trabaja en el alcance solicitado; no conviertas una tarea pequeña en una reescritura completa.
- Conserva identidad visual, contenido válido y funcionalidades existentes. Prefiere cambios pequeños y componentes reutilizables. No actualices dependencias ni cambies frameworks sin una necesidad comprobada.
- Verifica comandos en los manifiestos actuales. Usa el gestor correspondiente al lockfile; con package-lock.json, instala con npm ci.
- No inventes información comercial, precios, servicios, testimonios, experiencia profesional ni funciones implementadas.
- No publiques secretos, valores de .env, datos personales o bases de datos reales. Usa .env.example con valores ficticios. No cometas node_modules, builds ni archivos SQLite de ejecución, incluidos WAL/SHM.
- Respeta cambios del usuario y evita operaciones destructivas, force pushes o migraciones que borren datos. Trabaja en ramas y cambios revisables.

## Español e inglés
- Toda interfaz nueva o modificada debe admitir es y en. Para implementar el requisito completo, inventaría primero todas las páginas y textos.
- Centraliza traducciones mediante claves estables y reutiliza el mecanismo existente; evita condicionales de idioma repetidos por componente.
- Incluye navegación, contenido, botones, etiquetas, placeholders, validaciones, estados vacíos, mensajes de éxito/error, atributos accesibles y metadatos.
- Ofrece un selector accesible con nombres Español / English; recuerda la elección. Sin elección previa, usa un idioma soportado del navegador y español como fallback.
- Actualiza document.documentElement.lang. Formatea fechas y números con Intl. No cambies moneda, precios ni datos de negocio al traducir.
- Cambiar idioma debe conservar ruta, selección y datos introducidos en formularios.
- Comprueba paridad de claves, ausencia de claves visibles y navegación/formularios en ambos idiomas.

## Analítica centralizada con SQLite
- El objetivo es medir visitas y uso de formularios mediante eventos guardados en SQLite en el servidor. Un contador local o SQLite del navegador no satisface este requisito.
- Reutiliza el backend existente cuando sea adecuado. Si no existe, diseña una API mínima compatible con el hosting. Verifica almacenamiento persistente antes de afirmar que funciona en producción.
- No dependas de un archivo local efímero de una función serverless. Documenta el servicio con disco persistente, ubicación configurable de la BD, despliegue y copias de seguridad. Si el hosting no lo permite, presenta la alternativa concreta al usuario antes de sustituir SQLite o cambiar proveedor.
- Conserva las bases de negocio existentes. SQLite es para analítica; no migres automáticamente MySQL, PostgreSQL o Supabase.
- Define un contrato de eventos versionado y una lista permitida: page_view, session_start, form_start, form_submit_attempt, form_validation_error, form_submit_success y form_submit_error. Instrumenta únicamente formularios/rutas que existan.
- page_view representa una carga inicial o cambio real de ruta, no cada render. form_start ocurre una vez por formulario por sesión al interactuar; submit_attempt ocurre antes de validar. Registra éxito solo después de confirmación del servicio receptor. Un clic a WhatsApp o mailto no demuestra entrega.
- Usa event_id único para deduplicar reintentos y efectos duplicados. session_start ocurre una vez por sesión. Define y documenta expiración de sesión y reglas de conteo.
- Guarda únicamente campos permitidos: event_id, event_type, received_at UTC del servidor, path sin query/hash, locale, session_id aleatorio, form_id estable y código de error saneado si aplica.
- No guardes contenido de formularios, pulsaciones, nombres, teléfonos, emails, contraseñas, tokens, IP sin anonimizar ni URLs que puedan contener información personal. Evita fingerprinting; permite que el sitio funcione sin identificador persistente.
- Distingue vistas, sesiones y visitantes únicos estimados. No presentes sesiones como personas reales. Documenta exclusión de pruebas/bots y límites de medición.
- Valida payloads en servidor, limita tamaño y frecuencia, parametriza SQL y restringe orígenes conforme al despliegue. Los contadores de clientes no son una fuente confiable.
- Añade migraciones reproducibles e índices justificados por consultas; comprueba persistencia al reiniciar, concurrencia esperada y deduplicación.
- Un fallo de analítica nunca debe bloquear navegación ni envío del formulario. Usa reintentos limitados sin duplicar eventos.
- Protege consultas y exportaciones de estadísticas mediante autenticación/autorización; no expongas la BD ni agregues un panel público.
- Documenta retención configurable y eliminación periódica de eventos. Si se usa consentimiento, respétalo y no envíes eventos antes de obtenerlo.

## Errores, rendimiento y accesibilidad
- Reproduce y describe el error antes de corregirlo. Revisa rutas, enlaces, formularios, errores de consola/red y respuestas del backend en el flujo afectado.
- Mantén validaciones de cliente y servidor, manejo de carga/éxito/error y prevención de envíos duplicados.
- Verifica responsive, teclado, foco visible, labels, contraste y reducción de movimiento.
- Optimiza con evidencia: identifica el cuello de botella y compara antes/después. Revisa imágenes, carga diferida, peticiones repetidas, tamaño del bundle y consultas; evita memoización o índices sin motivo.
- No ocultes errores desactivando lint, eliminando pruebas o simulando resultados exitosos.

## Verificación y documentación
- Ejecuta build, lint y pruebas existentes relevantes para cambios de código. Distingue fallos preexistentes de regresiones. Añade pruebas significativas para traducciones, contrato de eventos, deduplicación, validación y persistencia al implementar esas funciones.
- En cambios solo documentales, verifica exactitud de rutas/comandos y consistencia; no hace falta ejecutar toda la aplicación.
- No inventes comandos de tests si no existen. Si falta infraestructura, informa la limitación y usa verificaciones manuales concretas.
- Actualiza README cuando cambien instalación, scripts, variables, API, idiomas, analítica o despliegue. Separa implementado, pendiente y limitaciones.
- Al finalizar, resume qué cambió, por qué, cómo se verificó y qué queda pendiente. Nunca afirmes que el sitio está libre de todos los errores.

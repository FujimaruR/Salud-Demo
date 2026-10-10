# DentSmile — Demo de clínica

Demo de portafolio desarrollada por Emilio Castillo con la identidad DentSmile solicitada: Glassmorphism, azules claros, blanco y fotografía dental. La clínica, perfiles, especialidades, duraciones y disponibilidad son ficticios y se identifican en la interfaz.

## Implementado

- Portada, seis tratamientos, tres perfiles ilustrativos, espacio de clínica, proceso, FAQ y reserva por pasos.
- Reserva: motivo, especialista compatible, fecha, horario, revisión y confirmación simulada.
- Ventana de 21 días futuros; domingos sin disponibilidad, horario reducido de sábado y horarios diferenciados por especialista.
- Cambiar tratamiento elimina el especialista y horario anteriores; cambiar fecha o especialista elimina el horario seleccionado.
- El idioma se puede cambiar durante la revisión sin perder opciones. Fechas con Intl y foco trasladado al siguiente paso.
- No se piden nombres, teléfonos, síntomas, documentos ni datos médicos. No se contacta una clínica ni se crea una cita real.

Se mantiene React, TypeScript y Vite existentes, sin añadir dependencias. Se reemplaza la composición pública anterior; sus componentes se conservan como código de referencia y no se incluyen en el recorrido activo ni en el bundle cuando no están importados. No se modificaron Prisma ni bases de datos.

## Ejecutar y comprobar

Desde `salud-demo/`, con Node 24:

```powershell
npm ci
npm run dev -- --host 127.0.0.1 --port 5185
npm run lint
npm run build
npm run test:i18n
npm run test:analytics
```

Abre http://127.0.0.1:5185/. La compilación produce `dist/`, listo para hosting estático. Hay seis páginas: `/`, `/tratamientos`, `/equipo`, `/clinica`, `/preguntas` y `/reservar`. React Router gestiona la navegación; `vercel.json` permite recargar rutas directas sin perder los recursos estáticos. Otros hostings deben aplicar el fallback a `index.html`. `npm run preview` permite revisar ese resultado localmente.

## Estructura y medios

- `src/App.tsx`: marco y navegación compartidos.
- `src/pages/DentalPages.tsx`: portada, tratamientos con fotografía, equipo, clínica y FAQ.
- `src/pages/Booking.tsx`: reserva independiente.
- `src/site/routes.json`: rutas públicas.
- `src/pages/Dental.css`: identidad, distribución y adaptación móvil.
- `src/site/booking.mjs`: especialistas compatibles, calendario y disponibilidad ficticia.
- `src/site/catalog.json`: traducciones; las claves nuevas comienzan con `dental.`.

Fotografías reales de referencia, almacenadas en `public/media/`. No corresponden al equipo o instalaciones de la clínica ficticia. Se emplean carga diferida, dimensiones explícitas y texto alternativo. Créditos: [MEDIA.md](MEDIA.md).

Paleta: blanco, azul hielo `#EDF6FF`, azul claro `#C4E5FF`, azul de acción `#2365B4` y tinta azul `#17354F`. Predomina Glassmorphism: paneles blancos translúcidos, desenfoque de fondo, bordes luminosos y sombras suaves. El fondo fotográfico de la portada y las imágenes de tratamientos y dentistas tienen protagonismo. Hay alternativa opaca para navegadores sin backdrop-filter y soporte para reducir movimiento.

## Analítica y privacidad

La configuración existente permanece en `.env.example` y `src/site/analytics.js`. Sin `VITE_ANALYTICS_URL` no se envían eventos; el servicio SQLite se documenta en [../analytics/README.md](../analytics/README.md). Se miden las seis rutas públicas y `demo-appointment`, con el contrato existente y sin contenidos de campos. Confirmar una simulación no emite un éxito de envío real.

Los datos seleccionados viven en memoria de React y desaparecen al recargar. No hay backend de reservas, atención médica, cobros ni garantías de resultados.

## Verificación

El 8 de octubre de 2026 pasaron lint, TypeScript/build, 8 pruebas de idioma/cliente/calendario y 3 del servicio SQLite. Las pruebas de calendario cubren cambio de año, fechas fuera del intervalo, domingos cerrados, perfiles desconocidos y disponibilidad por especialista. Se revisaron en navegador selección de ortodoncia/Mateo, fecha, horario, cambio de idioma, revisión y confirmación. También se revisó móvil. Despliegue pendiente; no se hizo commit ni push.

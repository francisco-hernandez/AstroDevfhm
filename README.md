# DEVFHM · sitio (opción B "editor curado")

Portafolio de Francisco Hernández, diseñador y desarrollador web. Astro 6, CSS propio, español e inglés.

> No es lo mismo un desarrollador perezoso que un perezoso desarrollador.

## Comandos

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/
```

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Textos de la web (ES / EN) | `src/i18n/es.ts`, `src/i18n/en.ts` |
| Entradas del blog | `src/content/blog/*.md` (una por idioma, enlazadas con `translationSlug`) |
| Imágenes del perezoso por escena | `src/data/scenes.ts` |
| Colores, tipografía y piezas comunes | `src/styles/global.css` |
| Secciones de la home | `src/components/home/` |
| Páginas | `src/pages/` (español en la raíz, inglés en `/en/`) |

## Escenas del perezoso

Hoy todas las escenas usan `src/assets/slothdev.png`. Para cambiar una:

1. Añade el PNG en `src/assets/escenas/` (por ejemplo `escucho.png`).
2. En `src/data/scenes.ts`, impórtalo y ponlo en su clave (`escucho: escucho`).

Las instrucciones para generarlas están en `04-IMAGENES-PEREZOSO.md` (carpeta del proyecto).

## Nueva entrada del blog

Crea `src/content/blog/mi-entrada.md` con:

```md
---
title: "Título"
description: "Extracto"
category: "design"   # identity | strategy | uiux | productivity | design | tech
pubDate: 2026-11-20
image: "../../assets/blog/mi-imagen.png"
lang: "es"
translationSlug: "my-post"   # la versión en inglés, si existe
---
```

## Formulario de contacto (Formspree)

1. Crea un formulario en formspree.io y copia su ID (`https://formspree.io/f/XXXXXXXX`).
2. En Vercel: Settings → Environment Variables → `PUBLIC_FORMSPREE_ID = XXXXXXXX`, y vuelve a desplegar.
3. En local: copia `.env.example` a `.env` y pon el ID.

Sin ID, el formulario valida los campos pero avisa de que aún no está conectado.

## Pendiente antes de producción

- Textos de privacidad y términos (`src/views/LegalPage.astro`).
- Valores entre corchetes en `src/i18n/*.ts`: precios, forma de pago, años de experiencia, tiempo de respuesta…
- Proyectos reales, tu foto y testimonios.
- Logos oficiales de las tecnologías del hero (los actuales son simplificados).
- Dominio definitivo en `astro.config.mjs` (`site`).

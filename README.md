# Aura Dental — Landing Page de Clínica Odontológica

Sitio web estático y de alto rendimiento para una clínica odontológica moderna, construido con **Astro**, **React** y **Tailwind CSS**. Incluye diseño responsive, carrusel 3D interactivo, contenido 100% configurable y optimización SEO (Open Graph, Twitter Cards, JSON-LD y sitemap).

## Características

- **Arquitectura orientada a contenido**: toda la información (identidad, servicios, horarios, SEO) se define en `src/config/` y se renderiza en las secciones correspondientes. Cambia el contenido sin tocar los componentes.
- **Paleta Moderna & Fresca**: tokens de color centralizados (teal, sky, orange, slate) que transmiten higiene, tecnología y cuidado indoloro. Ajustable desde `src/styles/global.css`.
- **Carrusel CoverFlow 3D**: componente React con autoplay, pausa al hover y navegación por tarjetas.
- **SEO optimizado**: canonical, Open Graph, Twitter Cards, datos estructurados `MedicalBusiness` (horarios, geolocalización, redes sociales) y `robots.txt` + `sitemap.xml`.
- **Menú móvil** accesible y responsive.
- **Alt text y semántica** (`header`, `section`, `article`, `footer`) para accesibilidad e indexación.

## Tecnologías

| Tecnología  | Uso                                             |
| ----------- | ----------------------------------------------- |
| Astro       | Framework principal (generación estática + SSR) |
| React 19    | Componentes interactivos (carrusel)             |
| Tailwind 4  | Estilos con tema centralizado via CSS `@theme`  |
| Framer Motion | Animaciones del carrusel 3D                   |
| lucide-react | Iconografía del carrusel                        |

## Estructura del proyecto

```text
/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── config/                 # Contenido y configuración del sitio
    │   ├── siteConfig.ts       # Identidad, contacto, colores, nav, hero, valores
    │   ├── services.ts         # Tratamientos odontológicos + galería
    │   ├── schedule.ts         # Horarios y disponibilidad
    │   └── seo.ts              # Helpers SEO y JSON-LD (MedicalBusiness)
    ├── components/             # Secciones de la landing
    │   ├── Header.astro        # Navbar fijo con menú móvil
    │   ├── Hero.astro
    │   ├── CarouselCoverFlow.astro
    │   ├── CardCoverFlow.tsx   # Carrusel 3D interactivo (React)
    │   ├── Benefits.astro
    │   ├── Treatments.astro    # Renderiza config/services.ts
    │   ├── Results.astro
    │   ├── Location.astro      # Renderiza contacto y config/schedule.ts
    │   ├── Footer.astro
    │   └── ChatWidget.astro
    ├── layouts/
    │   └── Layout.astro        # <head> SEO completo + fuentes
    ├── pages/
    │   └── index.astro
    └── styles/
        └── global.css          # Paleta de colores y utilidades
```

## Requisitos

- Node.js ≥ 22.12.0

## Primeros pasos

```sh
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción (salida en ./dist/)
npm run build

# Previsualizar el build
npm run preview
```

> En este repositorio se usa el dev server en modo background:
> `astro dev --background` (gestionar con `astro dev stop`, `astro dev status` y `astro dev logs`).

## Configuración

### Contenido del sitio

Edita los archivos de `src/config/`:

- **`siteConfig.ts`** — nombre, eslogan, descripción, URL, contacto (teléfono, email), dirección, redes sociales, navegación, textos del hero, valores y footer.
- **`services.ts`** — lista de tratamientos (slug, categoría, duración, imagen y texto alternativo) y galería del carrusel.
- **`schedule.ts`** — horarios por día (apertura, cierre, abierto/cerrado), zona horaria y mensajes de disponibilidad. Se renderizan automáticamente en la sección **Visítanos**.

### Paleta de colores

Todos los colores se definen como tokens en `src/styles/global.css` dentro del bloque `@theme`:

| Token              | Valor     | Uso                            |
| ------------------ | --------- | ------------------------------ |
| `--color-brand`    | `#0F766E` | Primario (teal-700)            |
| `--color-accent`   | `#0EA5E9` | Secundario (sky-500)           |
| `--color-cta`      | `#F97316` | Botón de agendamiento          |
| `--color-cta-hover`| `#EA580C` | Hover del botón                |
| `--color-ink`      | `#0F172A` | Títulos h1 (slate-900)         |
| `--color-teal-900` | `#134E4A` | Títulos h2                     |
| `--color-ink-soft` | `#64748B` | Texto secundario (slate-500)   |
| `--color-cream`    | `#FFFFFF` | Fondo principal                |
| `--color-surface`  | `#F1F5F9` | Contenedores (slate-100)       |

### SEO

La URL canónica es un placeholder (`https://auramedical.example.com`). Antes de desplegar:

1. Actualiza `url` en `src/config/siteConfig.ts` con el dominio real.
2. Actualiza las referencias en `public/robots.txt` y `public/sitemap.xml`.

Los datos estructurados (`MedicalBusiness`) se generan automáticamente a partir de `siteConfig.ts` y `schedule.ts` en `src/config/seo.ts`.

## Scripts

| Comando               | Acción                                            |
| --------------------- | ------------------------------------------------- |
| `npm run dev`         | Inicia el servidor de desarrollo en `:4321`       |
| `npm run build`       | Compila el sitio de producción a `./dist/`        |
| `npm run preview`     | Previsualiza el build localmente                  |
| `npm run astro -- --help` | Ayuda de la CLI de Astro                      |

## Documentación útil

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

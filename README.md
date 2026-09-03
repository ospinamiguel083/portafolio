# Portafolio — Miguel Angel Ospina Ospina

Portafolio personal construido con **React + Vite + Tailwind CSS**.

## Requisitos

- Node.js 18 o superior (recomendado 20+)

## Correrlo en tu computador

```bash
npm install
npm run dev
```

Esto abre el sitio en `http://localhost:5173`. Los cambios que hagas en los
archivos de `src/` se ven reflejados al instante.

Para generar la versión de producción (lo que se sube a internet):

```bash
npm run build
```

Esto crea una carpeta `dist/` con el sitio listo para publicar. Puedes
revisarla localmente con `npm run preview`.

## Estructura del proyecto

```
src/
  App.jsx                 # ensambla todas las secciones
  components/
    Hero.jsx               # portada
    About.jsx              # sobre mí
    Education.jsx          # formación
    Skills.jsx              # habilidades, agrupadas por categoría
    Projects.jsx            # proyectos destacados (ver abajo)
    GithubRepos.jsx          # repos en vivo desde la API de GitHub
    Contact.jsx              # contacto
    Footer.jsx
```

## Cómo agregar tu CV descargable

Pon tu archivo de CV en formato PDF dentro de la carpeta `public/`, con
exactamente este nombre: `cv-miguel-ospina.pdf`. Vite sirve todo lo que está
en `public/` directo en la raíz del sitio, así que el botón "Descargar CV"
del hero funcionará automáticamente sin tocar código.

## Cómo activar el formulario de contacto

El formulario usa [Formspree](https://formspree.io), un servicio gratuito
que recibe los mensajes del formulario y te los reenvía por correo — no
necesitas programar ni pagar un servidor.

1. Entra a formspree.io y crea una cuenta gratis con tu correo.
2. Crea un formulario nuevo ("New Form"), ponle un nombre (ej: "Portafolio")
   y en el correo de destino usa `ospinamiguel083@gmail.com`.
3. Formspree te da un ID de formulario (parte de una URL como
   `https://formspree.io/f/xyzabcd` — el ID es `xyzabcd`).
4. Abre `src/components/Contact.jsx` y reemplaza `TU_FORM_ID` por ese ID.
5. Guarda, sube el cambio a GitHub, y listo — mientras no lo configures, el
   formulario muestra un aviso en vez de romperse.

## Modo claro/oscuro

El botón de sol/luna (arriba a la derecha) alterna el tema y recuerda tu
preferencia la próxima vez que entres. Si nunca lo tocas, respeta el tema
del sistema operativo del visitante.

## Cómo agregar tus proyectos

Abre `src/components/Projects.jsx`. Ahí hay un array `projects` vacío con un
ejemplo comentado justo arriba. Descoméntalo, agrega uno por proyecto, y las
tarjetas aparecen automáticamente reemplazando el mensaje de "aún no hay
proyectos".

## Cómo cambiar los repos de GitHub que se muestran

En `src/components/GithubRepos.jsx` está la constante `GITHUB_USER` con tu
usuario. Ya está puesta en `ospinamiguel083`; los repos se traen en vivo
desde la API pública de GitHub, así que no hay que editar nada más — solo
asegúrate de que tus repos sean públicos para que aparezcan.

## 1. Subirlo a GitHub

```bash
cd portfolio-miguel
git init
git add .
git commit -m "Primer commit: portafolio inicial"
git branch -M main
git remote add origin https://github.com/ospinamiguel083/portafolio.git
git push -u origin main
```

> Importante: crea el repositorio en github.com/new con el nombre exacto
> `portafolio` (público, sin marcar "Add a README"). Si le pones otro
> nombre, debes actualizar también la línea `base: '/portafolio/'` en
> `vite.config.js` para que coincida — si no coinciden, el sitio se ve en
> blanco al publicarlo.

## 2. Publicarlo en GitHub Pages

Ya está todo configurado (el `base` en `vite.config.js` y el script de
despliegue en `package.json`). Solo necesitas:

```bash
npm run deploy
```

Esto compila el proyecto y sube automáticamente la carpeta `dist/` a una
rama especial llamada `gh-pages` en tu repositorio.

Después, actívalo desde GitHub:

1. Entra a `github.com/ospinamiguel083/portafolio` → pestaña **Settings**.
2. En el menú de la izquierda, clic en **Pages**.
3. En "Build and deployment" → "Branch", selecciona **gh-pages** y la carpeta **/ (root)**. Guarda.
4. Espera 1-2 minutos y tu sitio va a estar disponible en:
   `https://ospinamiguel083.github.io/portafolio/`

Cada vez que quieras actualizar el sitio publicado después de hacer cambios,
solo repites `npm run deploy` (no hace falta tocar la configuración de
Pages otra vez).


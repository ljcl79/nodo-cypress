# 🌲 Cypress E2E Testing: Tu Ruta hacia la Calidad de Software

¡Bienvenido/a al repositorio oficial del curso!

Este no es solo un conjunto de archivos y scripts; es tu **laboratorio de pruebas**. Aquí comienza tu viaje para dominar **Cypress**, la herramienta que está redefiniendo el estándar de la automatización moderna.

> _"La calidad no es un acto, es un hábito." — Aristóteles._

---

## 🎯 Objetivo de este Repositorio

El propósito de este código no es simplemente "pasar tests", sino enseñarte a pensar como un **Ingeniero de Automatización**. A través de estos ejercicios:

1.  **Entenderás la arquitectura** de pruebas End-to-End (E2E).
2.  **Dominarás el DOM** y cómo interactuar con él de forma resiliente.
3.  **Crearás redes de seguridad** que garanticen que el software que entregamos funciona impecablemente.

## 🚀 ¿Por qué Cypress?

Estamos aprendiendo Cypress porque elimina las barreras tradicionales del testing. Olvida los tiempos de espera inestables y la configuración compleja. Cypress nos permite:

- **Viajar en el tiempo** (Time Travel) para ver qué pasó en cada paso.
- **Depurar en tiempo real** con herramientas familiares de navegador.
- **Automatizar lo inestable** con esperas automáticas inteligentes.

---

## 🛠️ Requisitos Previos

Antes de iniciar los motores, asegúrate de tener tu entorno listo:

- **Node.js**: (Versión 18 o superior recomendada).
- **Un Editor de Código**: Recomendamos **VS Code** con extensiones de ES6/TypeScript.
- **Ganas de aprender**: El ingrediente más importante.

## ⚙️ Instalación y Configuración

Sigue estos pasos para levantar el proyecto en tu máquina local:

1.  **Clonar el repositorio:**

    ```bash
    git clone [https://github.com/tu-usuario/nombre-del-repo.git](https://github.com/tu-usuario/nombre-del-repo.git)
    cd nombre-del-repo
    ```

2.  **Instalar dependencias:**
    Descarga todas las librerías necesarias ejecutando:

    ```bash
    npm install
    ```

3.  **Abrir Cypress:**
    Para ver la magia ocurrir en la interfaz gráfica:
    ```bash
    npx cypress open
    ```

---

## 📂 Estructura del Proyecto

Para mantener un código limpio y escalable, organizamos nuestros archivos así:

```text
cypress/
├── e2e/            # 🧪 Aquí viven tus pruebas. Donde ocurre la magia.
├── fixtures/       # 💾 Datos estáticos (JSON) para simular respuestas (Mocks).
├── support/        # 🔧 Comandos personalizados y configuraciones globales.
└── downloads/      # 📂 Archivos descargados durante las pruebas.
```

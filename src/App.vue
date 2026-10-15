
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="aplicacion">
    <header class="encabezado">
      <h1>Directivas de Vue 3</h1>

      <p>
        Proyecto Unidad 3 - Single Page Application
      </p>

      <nav class="menu">
        <RouterLink to="/condicionales">
          Condicionales
        </RouterLink>

        <RouterLink to="/mostrar">
          v-show
        </RouterLink>

        <RouterLink to="/listas">
          v-for
        </RouterLink>

        <RouterLink to="/claves">
          v-bind:key
        </RouterLink>
      </nav>
    </header>

    <main class="contenido">
      <RouterView />
    </main>

    <footer class="pie">
      <p>
        Proyecto Unidad 3 - Vue 3 y Vue Router
      </p>
    </footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f8fafc;
  color: #213547;
}

#app {
  width: 100%;
  min-height: 100vh;
  max-width: none;
  margin: 0;
  padding: 0;
}

.aplicacion {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.encabezado {
  background-color: #152238;
  color: white;
  text-align: center;
  padding: 30px 20px;
}

.encabezado h1 {
  margin: 0 0 10px;
  font-size: 32px;
}

.encabezado p {
  margin-bottom: 25px;
}

.menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.menu a {
  padding: 12px 20px;
  background-color: #293950;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.menu a:hover {
  background-color: #345775;
}

.menu a.router-link-active {
  background-color: #42b883;
  color: white;
}

.contenido {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 20px;
  flex: 1;
}

.pie {
  padding: 20px;
  text-align: center;
  background-color: #152238;
  color: white;
}

@media (max-width: 600px) {
  .encabezado h1 {
    font-size: 25px;
  }

  .menu a {
    flex: 1 1 40%;
    text-align: center;
  }
}
</style>

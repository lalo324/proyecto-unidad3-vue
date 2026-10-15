
<script setup>
import { ref } from 'vue'

// Variable que controla si el mensaje es visible
const mostrarMensaje = ref(true)

// Función para mostrar u ocultar el mensaje
function cambiarVisibilidad() {
  mostrarMensaje.value = !mostrarMensaje.value
}
</script>

<template>
  <main class="contenedor">
    <h1>Directiva v-show en Vue 3</h1>

    <h2>Mostrar y ocultar elementos</h2>

    <p>
      La directiva v-show permite mostrar u
      ocultar elementos dependiendo de una
      condición, sin eliminarlos del DOM.
    </p>

    <button @click="cambiarVisibilidad">
      {{ mostrarMensaje ? 'Ocultar mensaje' : 'Mostrar mensaje' }}
    </button>

    <p v-show="mostrarMensaje" class="mensaje">
      ¡Hola! Este mensaje se muestra con v-show.
    </p>
  </main>
</template>

<style scoped>
.contenedor {
  max-width: 700px;
  margin: 40px auto;
  padding: 30px;
  text-align: center;
  background-color: #f4f7fb;
  border-radius: 12px;
  color: #213547;
}

button {
  padding: 12px 20px;
  margin-top: 20px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #31966a;
}

.mensaje {
  padding: 15px;
  margin-top: 20px;
  background-color: #d1fae5;
  border-radius: 8px;
}
</style>

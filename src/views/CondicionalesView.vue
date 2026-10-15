
<script setup>
import { ref } from 'vue'

// Variable reactiva que guarda la calificación
const calificacion = ref(85)
</script>

<template>
  <main class="contenedor">
    <h1>Condicionales en Vue 3</h1>
    <h2>v-if, v-else-if y v-else</h2>

    <p>
      Estas directivas permiten mostrar diferentes
      mensajes dependiendo de una condición.
    </p>

    <label for="calificacion">
      Ingresa una calificación:
    </label>

    <input
      id="calificacion"
      v-model.number="calificacion"
      type="number"
      min="0"
      max="100"
    />

    <p
      v-if="
        calificacion === '' ||
        calificacion === null ||
        calificacion < 0 ||
        calificacion > 100
      "
    >
      Ingresa una calificación válida.
    </p>

    <p v-else-if="calificacion >= 90">
      ¡Excelente calificación!
    </p>

    <p v-else-if="calificacion >= 70">
      ¡Aprobaste!
    </p>

    <p v-else>
      Necesitas estudiar más.
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

input {
  padding: 10px;
  margin: 20px;
  border: 1px solid #aaa;
  border-radius: 6px;
}
</style>

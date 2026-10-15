
<script setup>
import { ref } from 'vue'

// Lista de tareas con identificadores únicos
const tareas = ref([
  { id: 1, nombre: 'Estudiar Vue 3' },
  { id: 2, nombre: 'Realizar ejercicios' },
  { id: 3, nombre: 'Preparar proyecto' },
])

const nuevaTarea = ref('')
let siguienteId = 4

// Agregar una tarea nueva
function agregarTarea() {
  const nombre = nuevaTarea.value.trim()

  if (nombre !== '') {
    tareas.value.push({
      id: siguienteId++,
      nombre: nombre,
    })

    nuevaTarea.value = ''
  }
}

// Eliminar una tarea por su ID
function eliminarTarea(id) {
  tareas.value = tareas.value.filter(
    (tarea) => tarea.id !== id
  )
}
</script>

<template>
  <main class="contenedor">
    <h1>Directiva v-bind:key en Vue 3</h1>

    <h2>Identificadores únicos en listas</h2>

    <p>
      La directiva v-bind:key permite identificar
      cada elemento de una lista y facilita que Vue
      actualice correctamente los elementos.
    </p>

    <div class="formulario">
      <input
        v-model="nuevaTarea"
        type="text"
        placeholder="Escribe una tarea"
        @keyup.enter="agregarTarea"
      />

      <button @click="agregarTarea">
        Agregar
      </button>
    </div>

    <ul>
      <li
        v-for="tarea in tareas"
        :key="tarea.id"
      >
        <span>
          {{ tarea.nombre }} (ID: {{ tarea.id }})
        </span>

        <button
          class="eliminar"
          @click="eliminarTarea(tarea.id)"
        >
          Eliminar
        </button>
      </li>
    </ul>

    <p v-if="tareas.length === 0">
      No hay tareas registradas.
    </p>

    <p>Total de tareas: {{ tareas.length }}</p>
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

.formulario {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}

input {
  flex: 1;
  min-width: 0;
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 6px;
}

button {
  padding: 10px 15px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  opacity: 0.85;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 12px;
  margin: 10px 0;
  background-color: #d1fae5;
  border-radius: 8px;
}

.eliminar {
  background-color: #dc3545;
}
</style>

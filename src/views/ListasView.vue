
<script setup>
import { ref } from 'vue'

// Arreglo reactivo de lenguajes
const lenguajes = ref([
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'PHP',
])
</script>

<template>
  <main class="contenedor">
    <h1>Directiva v-for en Vue 3</h1>

    <h2>Recorrer una lista de elementos</h2>

    <p>
      La directiva v-for permite recorrer
      un arreglo y mostrar sus elementos
      automáticamente en la página.
    </p>

    <h3>Lenguajes de programación</h3>

    <ul>
      <li
        v-for="(lenguaje, indice) in lenguajes"
        :key="lenguaje"
      >
        {{ indice + 1 }}. {{ lenguaje }}
      </li>
    </ul>

    <p>
      Total de lenguajes: {{ lenguajes.length }}
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

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 12px;
  margin: 10px 0;
  background-color: #d1fae5;
  border-radius: 8px;
}

h3 {
  margin-top: 25px;
}
</style>

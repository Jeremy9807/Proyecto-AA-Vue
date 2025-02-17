<template>
  <div class="app-sidebar">
    <h2>Bienvenido</h2>
    <h3>
      {{ name }}
    </h3>
    <h3>
      {{ email }}
    </h3>
    <ul>
      <li>
        <router-link to="/lista-tareas">Lista de tareas</router-link>
      </li>
      <li>
        <router-link to="/contador">Contador</router-link>
      </li>
      <li>
        <router-link to="/registro">Registro</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>

import { useRegistroStore } from '@/modules/registro/stores/registroStore';
import { ref, watch } from 'vue';

const registroStore = useRegistroStore();
const name = ref(registroStore.nombre.value);
const email = ref(registroStore.email.value);
watch(() => registroStore.nombre, (newValue) => {
  name.value = newValue;
});
watch(() => registroStore.email, (newValue) => {
  email.value = newValue;
});

</script>

<style>
.app-sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>

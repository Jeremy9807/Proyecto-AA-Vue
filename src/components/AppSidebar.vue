<template>
  <div class="app-sidebar">
    <h2>Bienvenido</h2>
    <h3>
      {{ registroStore.nombre }}
    </h3>
    <h3>
      {{ registroStore.email }}
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

const registroStore = useRegistroStore();

</script>

<style>
.app-sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>

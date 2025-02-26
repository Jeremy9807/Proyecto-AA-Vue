<template>
  <div class="app-sidebar">
    <h2>Bienvenido</h2>
    <p>Tu mensaje: {{ mensajeRecibido }}</p>
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
      <li>
        <router-link to="/propiedades-computadas">Calcular</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>

import { useRegistroStore } from '@/modules/registro/stores/registroStore';
import { defineProps, ref, watch } from "vue";

const props = defineProps(['mensaje']);
const mensajeRecibido = ref(props.mensaje);

watch(() => props.mensaje, (newValue) => {
  mensajeRecibido.value = newValue;
});

const registroStore = useRegistroStore();

</script>

<style>
.app-sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>

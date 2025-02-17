<template>
  <div class="app-sidebar">
    <h2>barra lateral</h2>
    <ul>
      <li>
        <router-link to="/lista-tareas">Lista de tareas</router-link>
      </li>
      <li>
        <router-link to="/header">Header</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style>
.app-sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>

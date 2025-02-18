<template>
  <div class="container">
    <Sidebar></Sidebar>
    <div class="contenido">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/AppSidebar.vue";
</script>

<style>
.container {
  display: flex;
  padding-top: 65px;
}

.contenido {
  flex: 1;
  padding: 20px;
}
</style>

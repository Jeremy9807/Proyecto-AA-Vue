<template>
  <div class="container">
    <Sidebar :mensaje="texto"></Sidebar>
    <div class="contenido">
      <input type="text" v-model="texto" />
      <h1>{{ texto }}</h1>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/AppSidebar.vue";
import { ref } from "vue";

const texto = ref("");

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

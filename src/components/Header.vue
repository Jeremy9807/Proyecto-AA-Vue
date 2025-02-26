<!-- eslint-disable vue/multi-word-component-names -->
<template>

  <div class="header-container">
    <div class="pre-header"></div>

    <div class="header">
      <Weather />
    </div>
  </div>

</template>

<script setup>

import Weather from "./WeatherCmp.vue";

</script>

<style scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 65px;
}

.pre-header {
  background-color: #ff0a00;
  height: 15px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
}

h3 {
  margin: 0;
}
</style>

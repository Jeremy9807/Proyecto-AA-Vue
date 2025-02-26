<template>

  <div class="resultado-container">
    <h2>Resultado</h2>
    <p>El resultado de la operación es: {{ props.result }}</p>
  </div>

</template>
<script setup>

  import { defineProps } from 'vue';

  const props = defineProps(
    [
      'result'
    ]
  );

</script>
<style scoped>

.resultado-container {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: aquamarine;
  transition: all 0.3s;
}

</style>
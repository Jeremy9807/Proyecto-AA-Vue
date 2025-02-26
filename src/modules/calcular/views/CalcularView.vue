<template>

  <h3>
    Propiedades computadas
  </h3>
  <input type="text" v-model="valor" />
  <ResultadoSection v-if="mostrarElemento" :result="valorCalculado"></ResultadoSection>
  <div v-else-if="isNaN(valor)">
    <p>
      Por favor, ingrese un número
    </p>
  </div>
  <div v-else>
    <p>
      VALOR IGUAL O MENOR A 10
    </p>
  </div>

</template>
<script setup>

  import { ref, computed } from 'vue';
  import ResultadoSection from '../components/ResultadoSection.vue';

  const valor = ref('');
  const valorCalculado = computed(() => {
    return valor.value * 3;
  });

  const mostrarElemento = computed(() => {
    return valor.value > 10 ;
  });

  const mostrarElemento2 = computed(() => {
    return valor.value > 100;
  });
  
</script>
<style scoped></style>
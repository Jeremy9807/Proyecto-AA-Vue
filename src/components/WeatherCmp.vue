<template>
  <h3>Temperatura actual: {{ weatherStore.temperatura }} °C</h3>
</template>
<script setup>

import { useWeather } from '../composables/useWeather';
import { onMounted } from 'vue';
import { useWeatherStore } from '../stores/weatherStore';

const weatherStore = useWeatherStore();

onMounted(() => {
  useWeather();
});

</script>
<style></style>

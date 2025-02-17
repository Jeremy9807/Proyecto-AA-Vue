<template>
    <div>
        <h2>
            Contador: {{ contador }}
        </h2>
        <button @click="contador++">Incrementar</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const contador = ref(0);
</script>

<style></style>
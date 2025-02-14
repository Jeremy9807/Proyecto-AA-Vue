<template>
    <div>
        <h2>Lista de tareas</h2>
        <input type="text" v-model="newTarea" @keyup.enter="addTarea" />
        <button @click="addTarea">Agregar tarea</button>
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">
                {{ tarea }}
                <button @click="removeTarea(index)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const tareas = ref([]);
    const newTarea = ref('');

    const addTarea = () => {
        if (newTarea.value.trim() !== '') {
            tareas.value.push(newTarea.value.trim());
            newTarea.value = '';
        }
    };

    const removeTarea = (index) => {
        tareas.value.splice(index, 1);
    };
</script>

<style>

</style>
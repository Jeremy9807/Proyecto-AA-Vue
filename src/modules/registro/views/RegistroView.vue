<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="submitForm">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" v-model="nombre" />
        <ErrorMessage name="nombre" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <Field type="email" name="email" id="email" placeholder="Ingrese su email" v-model="email" />
        <ErrorMessage name="email" />
      </div>
      <div class="form-group">
        <button type="submit">Registrar</button>
      </div>
    </Form>
  </div>
</template>


<script setup>

import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/ValidationSchema';
import { useRegistroStore } from '../stores/registroStore';
import { ref } from 'vue';

const registroStore = useRegistroStore();
const nombre = ref('');
const email = ref('');

const submitForm = () => {
  registroStore.guardarRegistro(nombre.value, email.value);
  console.log("Form enviado");
};

</script>


<style scoped>
.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
}

input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

button:active {
  background-color: #004380;
}
</style>

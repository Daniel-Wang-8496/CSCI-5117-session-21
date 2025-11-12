<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <h2>Test View</h2>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>

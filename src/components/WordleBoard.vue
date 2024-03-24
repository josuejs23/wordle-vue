<script setup lang="ts">
defineProps<{
  wordOfTheDay : string,
}>()
</script>

<template>
  <p>{{ wordOfTheDay }}</p>
  <input type="text" name="" id="">
  <p>You won!</p>
</template>

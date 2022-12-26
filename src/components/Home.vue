<script setup>
import HelloWorld from './HelloWorld.vue';
import Projects from './Projects.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld/>
    </div>
  </header>
  <Projects/>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Projects from './components/Projects.vue'
</script>
<script>
export default {
  data() {
    return {
      iconsSrc: {'Python': 'python-colored.svg', 'Django': 'django-colored.svg', 'Flask': 'flask.svg', 'Swift': 'swift-colored.svg', 'PHP': 'php-colored.svg', 'HTML5': 'html5-colored.svg', 'CSS3': 'css3-colored.svg', 'JavaScript': 'javascript-colored.svg', 'JQuery': 'jquery-colored.svg', 'React': 'react-colored.svg', 'Vue': 'vuejs-colored.svg', 'MySQL': 'mysql-colored.svg', 'C++': 'cplusplus-colored.svg', 'AdobeXD': 'xd-colored.svg', 'Figma': 'figma-colored.svg','PrestaShop':'prestashop.svg','ChatFuel':'chatfuel.svg','MicroPython':'MicroPython.svg','ESP8266':'esp8266.svg','Kotlin':'kotlin-colored.svg','PyGame':'pygame.svg','MacOS':'MacOS.svg','iOS':'iOS.svg','3D Printing':'3d-print-logo.png','WLED':'wled.png','Fusion360':'fusion360.png','ESPHome':'esphome.svg'}
    }
  }
}
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <HelloWorld :iconsSrc="iconsSrc"/>
    </div>
  </header>
  <Projects :iconsSrc="iconsSrc"/>
  <!-- <main>
    <TheWelcome />
  </main> -->
</template>

<style scoped>
header {
  line-height: 1.5;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>

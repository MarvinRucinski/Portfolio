<script>
import iconsSrc from './Data.vue'
export default {
  data() {
    return {
      icons: ['Python', 'Django', 'Flask', 'Swift', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'JQuery', 'React', 'Vue', 'MySQL', 'C++', 'AdobeXD', 'Figma'],
      iconsSrc: iconsSrc.iconsSrc
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="">Hi,</h1>
    <h1 class="">I'm <span class="blue">Marvin</span></h1>
    <p class="icons"> 
      <!-- TODO add icon description on hover -->
      <a rel="noreferrer" v-for="tech in icons"><img :src="'src/media/technologies/'+iconsSrc[tech]" width="36" height="36" :alt="tech" :title="tech" /></a> 

    </p> 
    <!-- TODO add social media (github, stackoverflow, ...) -->
    <div class="arrow-circle">
      <!-- TODO add link to next section -->
      <div class="arrow"></div>
    </div>
  </div>
</template>

<style scoped>
h1, h1>span {
  font-weight: 450;
  font-size: 13vmin;
}
h1>span {
  font-weight: 600;
}
h3 {
  font-size: 1.2rem;
}
.greetings {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
}
.icons>* {
  margin: 2px;
}
.icons {
  margin-bottom: 100px;
}
.arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid var(--color-border);
  border-bottom: 2px solid var(--color-border);
  margin-top: 12px;
  margin-left: 12px;
}
@keyframes float {
  from {bottom: 10px;}
  to {bottom: 20px;}
}

.arrow-circle {
  background-color: var(--color-background-mute);
  width: 50px;
  height: 50px;
  border-radius: 40px;

  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  rotate: 45deg;

  animation: float 1s infinite alternate-reverse;
  animation-timing-function: ease-in-out;

  transition: background-color .3s;
}

.arrow-circle:hover {
  background-color: var(--color-background-soft);
}

</style>

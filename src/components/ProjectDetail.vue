
<script setup>
import data from './Data.vue'
</script>

<script>
export default {
  data() {
    const project = data.projects.find(projectGroup =>
      (projectGroup.find(project => project.title == this.$route.params.name))
    ).find(project => project.title == this.$route.params.name)
    return {
      project: project
    }
  },
  methods: {
    newlineText(text) {
      return text.split('\n').map((str, index) => '<p>'+str+'</p>');
    }
  }
}
</script>

<template>
  <div class="back-link" @click="$router.go(-1)">
    <div class="arrow"></div>
  </div>
  <div class="projectDescription">
    <img v-if="project.images" :src="'src/media/' + project.images[0]" alt="" class="topImage">
    
    <div class="content">
      <header>
        <div class="name">
          <img class="icon" :class="project.iconClass" v-if="project.icon" :src="'src/media/' + project.icon" />
          <h3>{{ project.title }}</h3>
        </div>
        <div class="technologies">
                    <img class="technology" v-for="tech in project.technologies.slice().reverse()" :title="tech" :alt="tech"
                        :src="'src/media/technologies/' + data.iconsSrc[tech]" />
                </div>
      </header>
      <div class="description">
        <p class="shortDesription">{{ project.shortDescription }}</p>{{project.longDescription}}
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}
.projectDescription {
    padding: 20px;
    display: flex;
}
.content .technologies {
    display: flex;
    gap: 5px;
    flex-wrap: wrap-reverse;
    flex-direction: row-reverse;
}
.technologies .technology {
    height: 30px;
    max-width: 60px;
    object-fit: contain;
}
.topImage {
  width: 50%; 
  max-height: 700px;
}
.back-link .arrow {
  width: 15px;
  height: 15px;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  margin-top: 10px;
  margin-left: 10px;
    /* margin-top: 20px; */
    position:absolute
}
.back-link {
  background-color: var(--color-background-mute);
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-top:10px;

  rotate: 135deg;


  animation: float 1s infinite alternate-reverse;
  animation-timing-function: ease-in-out;

  transition: background-color .3s;

  /* position: absolute; */
}

.back-link:hover {
  background-color: var(--color-background-soft);
}

.projectDescription .icon {
    width:60px;
    border-radius: 3px;
}
.projectDescription .icon.app {
    background-color: white;
    border-radius: 15px;
}
.projectDescription .icon.shadow {
    box-shadow: 0 0 5px rgb(73, 73, 73);
}
.projectDescription .icon.dark {
    background-color: rgb(0, 0, 0);
}
.projectDescription .icon.inset {
    padding: 3px;
}
.name {
    display: flex;
    align-items: center;
    gap: 20px;
}
h3 {
  font-weight: 600;
  font-size: 18pt;
}

.shortDesription {
  font-weight: 600;
  font-size: 14pt;
  margin-bottom: 10px;
}
.description {
  font-size: 14pt;
  white-space: pre-wrap;
}
</style>

<script setup>
import data from './Data.vue'
</script>

<script>
export default {
  data() {
    try {
      const project = data.projects.find(projectGroup =>
        (projectGroup.find(project => project.title + '-' + project.subtitle == this.$route.params.name))
      ).find(project => project.title + '-' + project.subtitle == this.$route.params.name)
      return {
        project: project
      }
    }
    catch {
      this.$router.push('/404')
    }
  },
  mounted() {
    window.scrollTo(0,0);
  }
}
</script>

<template>
  <div class="back-link" @click="$router.go(-1)">
    <div class="arrow"></div>
  </div>
  <div class="projectDescription">

    <div class="images" v-if="project.images.length || project.customHtml">
      <div style="width:100%;height:100%;" v-if="project.customHtml" v-html="project.customHtml"></div>
      <img v-for="image in project.images" :src="'media/' + image" alt="" class="topImage">
    </div>

    <div class="content">
      <header>
        <div class="name">
          <img class="icon" :class="project.iconClass" v-if="project.icon" :src="'media/' + project.icon" />
          <div>
            <h3>{{ project.title }}</h3>
            <h4>{{ project.subtitle }}</h4>
          </div>
        </div>
        <div class="technologies">
          <img class="technology" v-for="tech in project.technologies.slice().reverse()" :title="tech" :alt="tech"
            :src="'media/technologies/' + data.iconsSrc[tech]" />
        </div>
      </header>
      <div class="description">
        <p class="shortDesription">{{ project.shortDescription }}</p>

        <!-- links -->
        <div v-if="project.links">
          <div v-for="link in project.links">
            <div class="link">
              <a :href="link.url" target="_blank">{{ link.name }}</a>
            </div>
          </div>
        </div>

        <div class="longDescription" v-html="project.longDescription"></div>
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
    gap: 20px;
}
.content .technologies {
    display: flex;
    gap: 5px;
    flex-wrap: wrap-reverse;
    flex-direction: row-reverse;
}
.technologies .technology {
    height: 30px;
    max-width: 75px;
    object-fit: contain;
}
.images {
  min-width: 50%; 
  /* max-height: 100vh; */
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
}
.images > *:first-child {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.images > *:last-child {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.topImage {
  object-fit: contain;
  max-width: 100%;
  max-height: 700px;
  margin-top: -1px;
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
  margin-top: 15px;
  margin-left: 15px;

  rotate: 135deg;

  animation: float 1s infinite alternate-reverse;
  animation-timing-function: ease-in-out;

  transition: background-color .2s;
  cursor: pointer;
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
a {
  color: white;
  background-color: rgb(0, 151, 189);
  padding: 9px 18px;
  border-radius: 7px;
  font-weight: 600;
  font-size: 14pt;
  line-height: 14pt;
}
a:hover {
  background-color: rgb(0, 114, 145);
}
.link {
  display: inline-block;
  margin-bottom: 10px;
  margin-top: 5px;
}
.projectDescription {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 750px) {
  header {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  .technologies .technology {
    height: 25px;
    max-width: 62.5px;
  }
  .shortDesription {
    font-size: 12pt;
  }
  a {
    font-size: 12pt;
    padding: 7px 14px;
  }
  .link {
    margin-bottom: 8px;
    margin-top: 0px;
  }
  .description {
    font-size: 12pt;
  }
  .projectDescription {
    padding: 10px;
    /* display: flex; */
    flex-direction: column-reverse;
  }
}
</style>
<style>
b {
  font-weight: bold;
}
</style>
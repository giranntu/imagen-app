<!-- src/App.vue -->
<template>
  <v-app>
    <v-app-bar app color="white" elevate-on-scroll>
      <v-container class="d-flex align-center">
        <v-img src="@/assets/google_cloud_logo.svg" max-height="40" class="mr-4"></v-img>
        <v-toolbar-title class="font-weight-bold text-h5" style="font-family: 'Google Sans', sans-serif;">圖片生成應用</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-img src="@/assets/vertex_ai_logo.svg" max-height="30"></v-img>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-slide-x-transition mode="out-in">
          <router-view></router-view>
        </v-slide-x-transition>
      </v-container>
    </v-main>

    <v-footer color="white" app>
      <v-container class="text-center">
        <span class="text-caption">&copy; {{ new Date().getFullYear() }} - Powered by Google Cloud Imagen 2.0</span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap');

.v-application {
  font-family: 'Google Sans', sans-serif;
}

.v-card {
  border-radius: 8px;
}

.v-btn {
  text-transform: none;
  border-radius: 4px;
}
</style>
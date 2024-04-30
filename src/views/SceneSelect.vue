<!-- src/views/SceneSelect.vue -->
<template>
  <div class="scene-select">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          <v-card elevation="4" class="pa-4">
            <v-card-title class="text-center text-h5 font-weight-bold primary--text">選擇場景</v-card-title>
            <v-card-text>
              <v-row>
                <v-col v-for="(scene, index) in scenes" :key="index" cols="12" sm="6" md="4">
                  <v-card :color="selectedScene === scene.value ? 'primary' : ''" class="pa-4" @click="selectScene(scene.value)">
                    <v-card-title class="text-h6 text-truncate">{{ scene.label }}</v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn color="secondary" @click="prevStep">上一步</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="generateImage">生成圖片</v-btn>
            </v-card-actions>
          </v-card>
          <v-card elevation="4" class="pa-4 mt-8">
            <v-card-title class="text-center text-h5 font-weight-bold primary--text">自定義場景</v-card-title>
            <v-card-text>
              <v-text-field v-model="customScene" label="輸入自定義場景" placeholder="不超過20個字符" @input="validateCustomScene"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="generateImage">生成圖片</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { useImageStore } from '@/store';
import scenes from '@/data/scenes.json';

export default {
  name: 'SceneSelect',
  data() {
    return {
      scenes,
      customScene: '',
      selectedScene: '',
    };
  },
  methods: {
    selectScene(scene) {
      this.selectedScene = scene;
    },
    validateCustomScene() {
      if (this.customScene.length > 20) {
        this.customScene = this.customScene.slice(0, 20);
      }
    },
    generateImage() {
      const imageStore = useImageStore();
      if (this.customScene) {
        imageStore.setScene(this.customScene);
      } else {
        imageStore.setScene(this.selectedScene);
      }
      this.$router.push('/generate', () => {
        window.scrollTo(0, 0);
      });
    },
    prevStep() {
      this.$router.push('/style', () => {
        window.scrollTo(0, 0);
      });
    },
  },
};
</script>
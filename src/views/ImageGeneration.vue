<!-- src/views/ImageGeneration.vue -->
<template>
  <div class="image-generation">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          <v-card elevation="4" class="pa-4">
            <v-card-title class="text-center text-h4 font-weight-bold primary--text">圖片生成結果</v-card-title>
            <v-card-text>
              <div v-if="loading" class="text-center">
                <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
                <p class="mt-4 text-subtitle-1">正在生成圖片...</p>
              </div>
              <div v-else>
                <v-row>
                  <v-col v-for="(image, index) in generatedImages" :key="index" cols="12" sm="6" md="4" class="pa-2">
                    <v-hover v-slot="{ hover }">
                      <v-card :elevation="hover ? 12 : 2" @click="selectImage(image)">
                        <v-img :src="image.url" aspect-ratio="1"></v-img>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
                <div class="text-center mt-8">
                  <v-btn color="primary" @click="generateAgain" class="mr-4">再次生成</v-btn>
                  <v-btn color="secondary" @click="goToHomePage">返回首頁</v-btn>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog v-model="showImageDetails" max-width="500">
        <v-card>
          <v-card-title class="text-h5 primary--text">圖片詳情</v-card-title>
          <v-card-text>
            <v-img :src="selectedImage.url" aspect-ratio="1"></v-img>
            <v-text-field v-model="username" label="輸入您的姓名" class="mt-4"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="submitImageDetails">提交</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-snackbar v-model="showSnackbar" color="success" :timeout="5000">
        圖片已傳送到咖啡機台區,感謝您的使用!
        <br>
        <span class="text-subtitle-1 font-weight-bold" style="font-family: 'Google Sans', sans-serif;">Powered by Google Cloud Imagen 2.0</span>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
import { useImageStore } from '@/store';
import { generateImages } from '@/services/api';
import axios from 'axios';

export default {
  name: 'ImageGeneration',
  data() {
    return {
      loading: false,
      generatedImages: [],
      selectedImage: null,
      username: '',
      showImageDetails: false,
      showSnackbar: false,
    };
  },
  computed: {
    character() {
      return useImageStore().character;
    },
    style() {
      return useImageStore().style;
    },
    scene() {
      return useImageStore().scene;
    },
  },
  mounted() {
    this.generateImages();
  },
  methods: {
    async generateImages() {
      const imageStore = useImageStore();
      const { character, style, scene } = imageStore;

      try {
        this.loading = true;
        const data = await generateImages(character, style, scene, 4);
        this.generatedImages = data.image_urls.map(url => ({ url }));
      } catch (error) {
        console.error('Failed to generate images:', error);
      } finally {
        this.loading = false;
      }
    },
    generateAgain() {
      this.generatedImages = [];
      this.generateImages();
    },
    goToHomePage() {
      this.$router.push('/');
    },
    selectImage(image) {
      this.selectedImage = image;
      this.showImageDetails = true;
    },
    async submitImageDetails() {
      try {
        const requestData = {
          username: this.username,
          character: this.character,
          style: this.style,
          scene: this.scene,
          imageUrl: this.selectedImage.url,
        };
        await axios.post('https://dummy-api-url.com/submit', requestData);
        console.log('Image details submitted successfully');
        this.showImageDetails = false;
        this.showSnackbar = true;
        setTimeout(() => {
          this.$router.push('/');
        }, 5000);
      } catch (error) {
        console.error('Failed to submit image details:', error);
      }
    },
  },
};
</script>

<style scoped>
.v-card {
  transition: all 0.3s ease-in-out;
}

.v-card:hover {
  transform: translateY(-4px);
}
</style>
// src/store/index.js
import { defineStore } from 'pinia';

export const useImageStore = defineStore('image', {
  state: () => ({
    character: '',
    style: '',
    scene: '',
    generatedImages: [],
  }),
  actions: {
    setCharacter(character) {
      this.character = character;
    },
    setStyle(style) {
      this.style = style;
    },
    setScene(scene) {
      this.scene = scene;
    },
    setGeneratedImages(images) {
      this.generatedImages = images;
    },
  },
});
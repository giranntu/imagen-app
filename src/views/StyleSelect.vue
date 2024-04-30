<!-- src/views/StyleSelect.vue -->
<template>
  <div class="style-select">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          <v-card elevation="4" class="pa-4">
            <v-card-title class="text-center text-h5 font-weight-bold primary--text">選擇風格</v-card-title>
            <v-card-text>
              <v-row>
                <v-col v-for="(style, index) in styles" :key="index" cols="12" sm="6" md="4">
                  <v-card :color="selectedStyle === style.value ? 'primary' : ''" class="pa-4" @click="selectStyle(style.value)">
                    <v-card-title class="text-h6 text-truncate">{{ style.label }}</v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn color="secondary" @click="prevStep">上一步</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="nextStep">下一步</v-btn>
            </v-card-actions>
          </v-card>
          <v-card elevation="4" class="pa-4 mt-8">
            <v-card-title class="text-center text-h5 font-weight-bold primary--text">自定義風格</v-card-title>
            <v-card-text>
              <v-text-field v-model="customStyle" label="輸入自定義風格" placeholder="不超過20個字符" @input="validateCustomStyle"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="nextStep">下一步</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { useImageStore } from '@/store';
import styles from '@/data/styles.json';

export default {
  name: 'StyleSelect',
  data() {
    return {
      styles,
      selectedStyle: '',
      customStyle: '',
    };
  },
  methods: {
    selectStyle(style) {
      this.selectedStyle = style;
    },
    validateCustomStyle() {
      if (this.customStyle.length > 20) {
        this.customStyle = this.customStyle.slice(0, 20);
      }
    },
    nextStep() {
      const imageStore = useImageStore();
      if (this.customStyle) {
        imageStore.setStyle(this.customStyle);
      } else {
        imageStore.setStyle(this.selectedStyle);
      }
      this.$router.push('/scene', () => {
        window.scrollTo(0, 0);
      });
    },
    prevStep() {
      this.$router.push('/character', () => {
        window.scrollTo(0, 0);
      });
    },
  },
};
</script>
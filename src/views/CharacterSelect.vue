<!-- src/views/CharacterSelect.vue -->
<template>
  <div class="character-select">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          <v-card elevation="4" class="pa-4">
            <v-card-title class="text-center text-h5 font-weight-bold primary--text">選擇角色</v-card-title>
            <v-card-text>
              <v-row>
                <v-col v-for="(character, index) in characters" :key="index" cols="12" sm="6" md="4">
                  <v-card :color="selectedCharacter === character.value ? 'primary' : ''" class="pa-4" @click="selectCharacter(character.value)">
                    <v-card-title class="text-h6 text-truncate">{{ character.label }}</v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="nextStep">下一步</v-btn>
            </v-card-actions>
          </v-card>
          <v-card elevation="4" class="pa-4 mt-8">
            <v-card-title class="text-center text-h5 font-weight-bold primary--text">自定義角色</v-card-title>
            <v-card-text>
              <v-text-field v-model="customCharacter" label="輸入自定義角色" placeholder="不超過20個字符" @input="validateCustomCharacter"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="nextStep">下一步</v-btn>
            </v-card-actions>
          </v-card>
          <div class="text-center mt-8">
            <v-btn color="secondary" @click="goToHomePage">返回首頁</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { useImageStore } from '@/store';
import characters from '@/data/characters.json';

export default {
  name: 'CharacterSelect',
  data() {
    return {
      characters,
      customCharacter: '',
      selectedCharacter: '',
    };
  },
  methods: {
    selectCharacter(character) {
      this.selectedCharacter = character;
    },
    validateCustomCharacter() {
      if (this.customCharacter.length > 20) {
        this.customCharacter = this.customCharacter.slice(0, 20);
      }
    },
    nextStep() {
      const imageStore = useImageStore();
      if (this.customCharacter) {
        imageStore.setCharacter(this.customCharacter);
      } else {
        imageStore.setCharacter(this.selectedCharacter);
      }
      this.$router.push('/style', () => {
        window.scrollTo(0, 0);
      });
    },
    goToHomePage() {
      this.$router.push('/');
    },
  },
};
</script>
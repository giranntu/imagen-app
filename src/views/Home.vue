<!-- src/views/Home.vue -->
<template>
  <div class="home">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline">
            歡迎來到圖片生成應用程式
          </v-card-title>
          <v-card-text>
            這個應用程式可以讓您通過選擇主角、圖片風格和場景來生成獨特的圖片。生成的圖片將以4張為一組呈現,您可以選擇其中一張作為最終選擇。
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" to="/character">開始生成</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
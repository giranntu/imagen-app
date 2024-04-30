<template>
  <div class="image-selector">
    <v-card elevation="4" class="pa-4">
      <v-card-title class="text-center text-h5 font-weight-bold">{{ title }}</v-card-title>
      <v-card-text>
        <v-chip-group v-model="selectedItem" mandatory class="d-flex flex-wrap justify-center">
          <v-chip
            v-for="item in shuffledItems"
            :key="item.value"
            :value="item.value"
            @click="selectItem(item.value)"
            class="ma-2"
            color="primary"
            text-color="white"
            size="large"
          >
            {{ item.label }}
          </v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'ImageSelector',
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedItem: '',
    };
  },
  computed: {
    shuffledItems() {
      return _.shuffle(this.items);
    },
  },
  methods: {
    selectItem(itemValue) {
      this.selectedItem = itemValue;
      this.$emit('select', itemValue);
    },
  },
};
</script>
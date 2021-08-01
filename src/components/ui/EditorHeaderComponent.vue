<template>
  <v-app-bar app flat dense dark color="indigo darken-3">
    <div class="branding mr-4">
      <v-img src="/src/assets/logo.svg" :width="124" :height="48" />
    </div>

    <v-app-bar-title>Title</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn text>Developer</v-btn>

    <v-btn text>Help</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'HeaderComponent',
  components: {},
})
export default class HeaderComponent extends Vue {}
</script>

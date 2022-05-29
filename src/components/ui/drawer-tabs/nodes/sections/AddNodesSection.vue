<template>
  <v-card class="ma-2 overflow-hidden">
    <v-card-title class="py-3 accent darken-3 white--text">
      {{ title }}
      <v-spacer />
      <v-btn icon dark @click="opened = !opened">
        <v-icon v-text="`mdi-chevron-${opened ? 'up' : 'down'}`" />
      </v-btn>
    </v-card-title>
    <v-expand-transition>
      <v-flex v-show="opened">
        <slot />
      </v-flex>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'AddNodesSection',
  components: {},
})
export default class AddNodesSection extends Vue {
  @Prop({ default: 'Section' }) public readonly title!: string;

  public opened: boolean = true;
}
</script>
<template>
  <v-card elevation="2" rounded="lg" class="mb-3 overflow-hidden">
    <v-card-title>
      {{ title }}
      <v-spacer />
      <v-btn icon @click="opened = !opened">
        <v-icon v-text="opened ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
      </v-btn>
    </v-card-title>
    <v-divider />
    <v-expand-transition>
      <v-flex v-show="opened">
        <slot />
      </v-flex>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, VModel, Prop } from 'vue-property-decorator';

@Component({
  name: 'MediaManagerResourcePropertySection',
  components: {},
})
export default class MediaManagerResourcePropertySection extends Vue {
  @VModel({ default: true }) public opened!: boolean;
  @Prop({ default: 'Section' }) public readonly title!: string;
}
</script>
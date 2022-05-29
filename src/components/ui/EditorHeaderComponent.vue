<template>
  <v-app-bar app flat dense dark color="indigo darken-3">
    <div class="branding mr-4">
      <v-img src="/src/assets/logo.svg" :width="124" :height="48" />
    </div>

    <v-app-bar-title v-text="pageTitle" />

    <v-spacer></v-spacer>

    <v-btn text>Developer</v-btn>

    <v-btn text>Help</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import EditorModuleEnum from 'model/EditorModules';
import { StoreState } from 'store';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'HeaderComponent',
  components: {},
})
export default class HeaderComponent extends Vue {
  public readonly state: StoreState = this.$store.state;

  public get pageTitle(): string {
    switch (this.state.currentEditorModule) {
      case EditorModuleEnum.PageEditor:
        return `Page Editor: ${this.state.currentDocument?.title || 'New Page'}`;
      case EditorModuleEnum.MediaManager:
        return 'Media Manager';
      case EditorModuleEnum.GraphEditor:
        return 'Graph Editor';
      default:
        return 'Unknown';
    }
  }
}
</script>

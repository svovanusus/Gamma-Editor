<template>
  <v-app-bar app flat dense dark color="indigo darken-3" id="app-header">
    <div class="branding mr-4">
      <v-img src="/src/assets/logo.svg" :width="124" :height="48" />
    </div>

    <v-app-bar-title v-text="pageTitle" />

    <v-spacer></v-spacer>

    <template v-if="isEditingMode">
      <v-btn text @click="preview()">Preview</v-btn>

      <v-btn text :loading="isLoading" @click="save()">Save</v-btn>

      <v-menu bottom left offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon small v-bind="attrs" v-on="on">
            <v-icon small>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list min-width="150px">
          <v-list-item @click="() => {}">Help</v-list-item>
          <v-divider />
          <v-list-item @click="exit()">Exit</v-list-item>
        </v-list>
      </v-menu>
    </template>
    <template v-else>
      <v-btn text @click="backToEditor()">Back to Editor</v-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import EditorMode from 'model/EditorMode';
import EditorModuleEnum from 'model/EditorModules';
import { StoreState } from 'store';
import { Component, Vue } from 'vue-property-decorator';

enum BtnActionType {
  Save = 'save',
  SaveAndPublish = 'save-and-publish',
  Exit = 'exit',
}

interface BtnActionTypeTable {
  [type: string]: () => void;
}

@Component({
  name: 'HeaderComponent',
  components: {},
})
export default class HeaderComponent extends Vue {
  public readonly state: StoreState = this.$store.state;

  public isLoading: boolean = false;

  public get isEditingMode(): boolean {
    return this.state.editorMode === EditorMode.Editing;
  }

  public get pageTitle(): string {
    if (!this.isEditingMode) {
      return `Preview: ${this.state.currentDocument?.title || 'New Page'}`; 
    }

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

  public preview(): void {
    this.state.editorMode = EditorMode.Preview;
  }

  public backToEditor(): void {
    this.state.editorMode = EditorMode.Editing;
  }

  public save(): void {
    console.log('SAVE');
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    console.log(JSON.stringify(this.state.currentDocument.save()));
  }

  public exit(): void {
    window.location.assign('http://localhost:5000/sites');
  }
}
</script>

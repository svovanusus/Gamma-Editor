<template>
  <v-list nav>
    <v-list-item-group v-model="currentPage" color="primary" mandatory>
      <v-list-item v-for="page in pages" :key="`page-${page.id}`">
        <v-list-item-title v-text="page.title" />
        <v-list-item-action>
          <v-btn icon small @click="removePageClick(page.id)">
            <v-icon small>mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list-item-group>
    <v-btn color="secondary" dark block elevation="0" class="mt-2" @click="addPageClick()">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-list>
</template>

<script lang="ts">
import { StoreState, StoreTypes } from 'store';
import { Component, Vue } from 'vue-property-decorator';

interface PageDesc {
  id: string;
  title: string;
}

@Component({
  name: 'SitePagesComponent',
  components: {},
})
export default class SitePagesComponent extends Vue {
  public state: StoreState = this.$store.state;

  public get pages(): PageDesc[] {
    return this.state.documents.map(x => ({ id: x.id, title: x.title }));
  }

  public get currentPage(): number {
    return this.pages.findIndex(x => x.id === this.state.currentDocument?.id);
  }

  public set currentPage(val: number) {
    if (val < 0 || val >= this.pages.length) {
      this.setPage(null);
      return;
    }

    const page = this.pages[val];
    this.setPage(page?.id ?? null);
  }

  public addPageClick(): void {
    this.$store.dispatch(StoreTypes.actions.CREATE_DOCUMENT);
  }

  public removePageClick(pageId: string): void {
    this.$store.dispatch(StoreTypes.actions.DELETE_DOCUMENT, pageId);
  }

  private setPage(pageId: string): void {
    this.$store.dispatch(StoreTypes.actions.SELECT_DOCUMENT, pageId);
  }
}
</script>
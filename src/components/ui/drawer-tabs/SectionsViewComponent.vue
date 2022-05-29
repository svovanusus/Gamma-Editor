<template>
  <div class="section-container">
    <transition :name="`slide-custom-transition${selectedSection ? '' : '-reverse'}`">
      <v-sheet v-if="selectedSection" class="current-section">
        <v-toolbar flat dense color="blue-grey lighten-5">
          <v-btn icon @click="selectedSection = null">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-toolbar-title v-text="selectedSection.title" />
        </v-toolbar>
        <component :is="selectedSection.component" />
      </v-sheet>
      <v-list v-else class="common-section">
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="sec in sections" :key="sec.name">
            <v-list-item-icon>
              <v-icon v-text="sec.icon" />
            </v-list-item-icon>
            <v-list-item-title v-text="sec.title" />
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.common-section, .current-section {
  min-height: 100%;
}

.section-container {
  position: relative;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;

  & > * {
    width: 100%;
  }
}

.slide-custom-transition-enter-active, .slide-custom-transition-reverse-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
}

.slide-custom-transition-enter-active, .slide-custom-transition-leave-active,
.slide-custom-transition-reverse-enter-active, .slide-custom-transition-reverse-leave-active {
  transform: translate(0px, 0px);
  transition: transform ease-in-out .3s;
}

.slide-custom-transition-leave-to, .slide-custom-transition-reverse-enter {
  transform: translate(-40%, 0px);
}

.slide-custom-transition-enter, .slide-custom-transition-reverse-leave-to {
  transform: translate(100%, 0px);
}
</style>

<script lang="ts">
import { Component, Vue, Prop, VModel } from 'vue-property-decorator';
import SectionDesc from 'components/ui/drawer-tabs/SectionDesc';

@Component({
  name: 'SectionsViewComponent',
  components: {},
})
export default class SectionsViewComponent extends Vue {
  @Prop({ default: [] }) public readonly sections!: SectionDesc[];

  @VModel({ default: null }) public selectedSection!: SectionDesc | null;

  public get selectedItem(): number {
    if (!this.selectedSection) return -1;
    return this.sections.findIndex(x => x.name === this.selectedSection.name);
  }

  public set selectedItem(val: number) {
    if (val < 0 || val >= this.sections.length) {
      this.selectedSection = null;
      return;
    }

    this.selectedSection = this.sections[val];
  }
}
</script>
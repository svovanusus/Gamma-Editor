<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <p>This is PAGES</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'PagesPanelComponent',
  components: {},
})
export default class PagesPanelComponent extends Vue {

}
</script>
<template>
  <component-wrapper :node="model" :componentId="model.id">
    <a v-if="isLink" :href="href" :title="model.title" class="btn" v-text="model.text" />
    <button v-else :title="model.title" class="btn" v-text="model.text" />
  </component-wrapper>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import ComponentWrapper from 'components/page/ComponentWrapper.vue';
import NodeComponentBase from 'components/page/NodeComponentBase';
import ButtonNode from 'logic/model/page/Nodes/ButtonNode';
import ButtonActionTypeEnum from 'logic/model/page/settings/ButtonActionTypeEnum';
import ButtonLinkTypeEnum from 'logic/model/page/settings/ButtonLinkTypeEnum';

@Component({
  name: 'ButtonNodeComponent',
  components: { ComponentWrapper },
})
export default class ButtonNodeComponent extends NodeComponentBase<ButtonNode> {
  public get isLink(): boolean {
    return this.model.actionType === ButtonActionTypeEnum.Link;
  }

  public get href(): string {
    switch(this.model.linkType) {
      case ButtonLinkTypeEnum.SitePage:
        return '#';
      case ButtonLinkTypeEnum.Anchor:
        return `#${this.model.anchorName}`;
      case ButtonLinkTypeEnum.ExternalLink:
        return this.model.linkText;
      default:
        return '#';
    }
  }
}
</script>

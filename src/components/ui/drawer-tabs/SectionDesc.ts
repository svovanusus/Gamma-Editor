import { Component as VueComponent } from 'vue';

type SectionDesc = {
  name: string;
  icon: string;
  title: string;
  component: VueComponent | string;
};

export default SectionDesc;
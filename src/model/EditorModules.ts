import IListItemDsc from 'model/IListItemDsc';

enum EditorModuleEnum {
  PageEditor = 'page-editor',
  MediaManager = 'media-manager',
  GraphEditor = 'graph-editor',
}

export default EditorModuleEnum;

export const EditorModulesDetails = new Map<EditorModuleEnum, IListItemDsc>([
  [EditorModuleEnum.PageEditor, { icon: 'mdi-file-document', title: 'Page Editor' }],
  [EditorModuleEnum.MediaManager, { icon: 'mdi-folder-multiple-image', title: 'Media Manager' }],
  [EditorModuleEnum.GraphEditor, { icon: 'mdi-source-branch', title: 'Graph Editor' }],
]);
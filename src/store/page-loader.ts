import INodeModel from 'model/INodeModel';

export default class PageLoader {
  private constructor() {}

  public static getExample1(): INodeModel {
    return JSON.parse('{"title":"Homepage","graphModel":"{\\"last_node_id\\": 48,\\"last_link_id\\": 52,\\"nodes\\": [{\\"id\\": 18,\\"type\\": \\"basic/time\\",\\"pos\\": [27,58],\\"size\\": {\\"0\\": 140,\\"1\\": 46},\\"flags\\": {},\\"order\\": 1,\\"mode\\": 0,\\"outputs\\": [{\\"name\\": \\"in ms\\",\\"type\\": \\"number\\",\\"links\\": null},{\\"name\\": \\"in sec\\",\\"type\\": \\"number\\",\\"links\\": [25,28]}],\\"properties\\": {}},{\\"id\\": 36,\\"type\\": \\"basic/const\\",\\"pos\\": [-1,228],\\"size\\": [180,30],\\"flags\\": {},\\"order\\": 0,\\"mode\\": 0,\\"outputs\\": [{\\"name\\": \\"value\\",\\"type\\": \\"number\\",\\"links\\": [24,27],\\"label\\": \\"3600.000\\"}],\\"properties\\": {\\"value\\": 3600}},{\\"id\\": 35,\\"type\\": \\"math/operation\\",\\"pos\\": [209,62],\\"size\\": [100,60],\\"flags\\": {},\\"order\\": 5,\\"mode\\": 0,\\"inputs\\": [{\\"name\\": \\"A\\",\\"type\\": \\"number,array,object\\",\\"link\\": 25},{\\"name\\": \\"B\\",\\"type\\": \\"number\\",\\"link\\": 24}],\\"outputs\\": [{\\"name\\": \\"=\\",\\"type\\": \\"number\\",\\"links\\": [26]}],\\"properties\\": {\\"A\\": 2276.612799999997,\\"B\\": 3600,\\"OP\\": \\"/\\"}},{\\"id\\": 37,\\"type\\": \\"math/operation\\",\\"pos\\": [220,170],\\"size\\": [100,60],\\"flags\\": {},\\"order\\": 6,\\"mode\\": 0,\\"inputs\\": [{\\"name\\": \\"A\\",\\"type\\": \\"number,array,object\\",\\"link\\": 28},{\\"name\\": \\"B\\",\\"type\\": \\"number\\",\\"link\\": 27}],\\"outputs\\": [{\\"name\\": \\"=\\",\\"type\\": \\"number\\",\\"links\\": [29,30]}],\\"properties\\": {\\"A\\": 2276.612799999997,\\"B\\": 3600,\\"OP\\": \\"%\\"}},{\\"id\\": 38,\\"type\\": \\"math/operation\\",\\"pos\\": [355,136],\\"size\\": [100,60],\\"flags\\": {},\\"order\\": 8,\\"mode\\": 0,\\"inputs\\": [{\\"name\\": \\"A\\",\\"type\\": \\"number,array,object\\",\\"link\\": 29},{\\"name\\": \\"B\\",\\"type\\": \\"number\\",\\"link\\": 31}],\\"outputs\\": [{\\"name\\": \\"=\\",\\"type\\": \\"number\\",\\"links\\": [33]}],\\"properties\\": {\\"A\\": 2276.612799999997,\\"B\\": 60,\\"OP\\": \\"/\\"}},{\\"id\\": 39,\\"type\\": \\"math/operation\\",\\"pos\\": [355,250],\\"size\\": [100,60],\\"flags\\": {},\\"order\\": 9,\\"mode\\": 0,\\"inputs\\": [{\\"name\\": \\"A\\",\\"type\\": \\"number,array,object\\",\\"link\\": 30},{\\"name\\": \\"B\\",\\"type\\": \\"number\\",\\"link\\": 32}],\\"outputs\\": [{\\"name\\": \\"=\\",\\"type\\": \\"number\\",\\"links\\": [35]}],\\"properties\\": {\\"A\\": 2276.612799999997,\\"B\\": 60,\\"OP\\": \\"%\\"}},{\\"id\\": 40,\\"type\\": \\"basic/const\\",\\"pos\\": [111,304],\\"size\\": [180,30],\\"flags\\": {},\\"order\\": 2,\\"mode\\": 0,\\"outputs\\": [{\\"name\\": \\"value\\",\\"type\\": \\"number\\",\\"links\\": [31,32],\\"label\\": \\"60.000\\"}],\\"properties\\": {\\"value\\": 60}},{\\"id\\": 21,\\"type\\": \\"math/floor\\",\\"pos\\": [356,61],\\"size\\": [80,30],\\"flags\\": {\\"collapsed\\": false},\\"order\\": 7,\\"mode\\": 0,\\"inputs\\": [{\\"name\\": \\"in\\",\\"type\\": \\"number\\",\\"link\\": 26}],\\"outputs\\": [{\\"name\\": \\"out\\",\\"type\\": \\"number\\",\\"links\\": [37]}],\\"properties\\": {}},{\\"id\\": 43,\\"type\\": \\"string/toString\\",\\"pos\\": [466,60],\\"size\\": {\\"0\\": 140,\\"1\\": 26},\\"flags\\": {},\\"order\\": 10,\\"mode\\": 0,\\"inputs\\": [{\\"name\\": \\"a\\",\\"type\\": 0,\\"link\\": 37}],\\"outputs\\": [{\\"name\\": \\"out\\",\\"type\\": \\"String\\",\\"links\\": [40]}],\\"properties\\": {}},{\\"id\\": 41,\\"type\\": \\"math/floor\\",\\"pos\\": [475,139],\\"size\\": [80,30],\\"flags\\": {\\"collapsed\\": false},\\"order\\": 11,\\"mode\\": 0,\\"inputs\\": [{\\"name\\": \\"in\\",\\"type\\": \\"number\\",\\"link\\": 33}],\\"outputs\\": [{\\"name\\": \\"out\\",\\"type\\": \\"number\\",\\"links\\": [38]}],\\"properties\\": {}},{\\"id\\": 42,\\"type\\": \\"math/floor\\",\\"pos\\": [474,251],\\"size\\": [80,30],\\"flags\\": {\\"collapsed\\": false},\\"order\\": 12,\\"mode\\": 0,\\"inputs\\": [{\\"name\\": \\"in\\",\\"type\\": \\"number\\",\\"link\\": 35}],\\"outputs\\": [{\\"name\\": \\"out\\",\\"type\\": \\"number\\",\\"links\\": [39]}],\\"properties\\": {}},{\\"id\\": 45,\\"type\\": \\"string/toString\\",\\"pos\\": [581,260],\\"size\\": {\\"0\\": 140,\\"1\\": 26},\\"flags\\": {},\\"order\\": 15,\\"mode\\": 0,\\"inputs\\": [{\\"name\\": \\"a\\",\\"type\\": 0,\\"link\\": 39}],\\"outputs\\": [{\\"name\\": \\"out\\",\\"type\\": \\"String\\",\\"links\\": [51]}],\\"properties\\": {}},{\\"id\\": 44,\\"type\\": \\"string/toString\\",\\"pos\\": [574,136],\\"size\\": {\\"0\\": 140,\\"1\\": 26},\\"flags\\": {},\\"order\\": 14,\\"mode\\": 0,\\"inputs\\": [{\\"name\\": \\"a\\",\\"type\\": 0,\\"link\\": 38}],\\"outputs\\": [{\\"name\\": \\"out\\",\\"type\\": \\"String\\",\\"links\\": [47]}],\\"properties\\": {}},{\\"id\\": 24,\\"type\\": \\"basic/string\\",\\"pos\\": [30,473],\\"size\\": [180,30],\\"flags\\": {},\\"order\\": 3,\\"mode\\": 0,\\"outputs\\": [{\\"name\\": \\"\\",\\"type\\": \\"string\\",\\"links\\": [41,49]}],\\"properties\\": {\\"value\\": \\":\\"}},{\\"id\\": 23,\\"type\\": \\"string/concatenate\\",\\"pos\\": [251,416],\\"size\\": {\\"0\\": 140,\\"1\\": 46},\\"flags\\": {},\\"order\\": 13,\\"mode\\": 0,\\"inputs\\": [{\\"name\\": \\"a\\",\\"type\\": \\"string\\",\\"link\\": 40},{\\"name\\": \\"b\\",\\"type\\": \\"string\\",\\"link\\": 41}],\\"outputs\\": [{\\"name\\": \\"out\\",\\"type\\": \\"string\\",\\"links\\": [42]}],\\"properties\\": {}},{\\"id\\": 46,\\"type\\": \\"string/concatenate\\",\\"pos\\": [424,390],\\"size\\": [140,46],\\"flags\\": {},\\"order\\": 16,\\"mode\\": 0,\\"inputs\\": [{\\"name\\": \\"a\\",\\"type\\": \\"string\\",\\"link\\": 42},{\\"name\\": \\"b\\",\\"type\\": \\"string\\",\\"link\\": 47}],\\"outputs\\": [{\\"name\\": \\"out\\",\\"type\\": \\"string\\",\\"links\\": [44]}],\\"properties\\": {}},{\\"id\\": 47,\\"type\\": \\"string/concatenate\\",\\"pos\\": [577,461],\\"size\\": {\\"0\\": 140,\\"1\\": 46},\\"flags\\": {},\\"order\\": 17,\\"mode\\": 0,\\"inputs\\": [{\\"name\\": \\"a\\",\\"type\\": \\"string\\",\\"link\\": 44},{\\"name\\": \\"b\\",\\"type\\": \\"string\\",\\"link\\": 49}],\\"outputs\\": [{\\"name\\": \\"out\\",\\"type\\": \\"string\\",\\"links\\": [50]}],\\"properties\\": {}},{\\"id\\": 48,\\"type\\": \\"string/concatenate\\",\\"pos\\": [743,344],\\"size\\": {\\"0\\": 140,\\"1\\": 46},\\"flags\\": {},\\"order\\": 18,\\"mode\\": 0,\\"inputs\\": [{\\"name\\": \\"a\\",\\"type\\": \\"string\\",\\"link\\": 50},{\\"name\\": \\"b\\",\\"type\\": \\"string\\",\\"link\\": 51}],\\"outputs\\": [{\\"name\\": \\"out\\",\\"type\\": \\"string\\",\\"links\\": [52]}],\\"properties\\": {}},{\\"id\\": 19,\\"type\\": \\"basic/console\\",\\"pos\\": [844,505],\\"size\\": {\\"0\\": 140,\\"1\\": 46},\\"flags\\": {},\\"order\\": 19,\\"mode\\": 3,\\"inputs\\": [{\\"name\\": \\"log\\",\\"type\\": -1,\\"link\\": 13},{\\"name\\": \\"msg\\",\\"type\\": 0,\\"link\\": 52}],\\"properties\\": {\\"msg\\": \\"0:37:56\\"}},{\\"id\\": 20,\\"type\\": \\"events/timer\\",\\"pos\\": [602,576],\\"size\\": {\\"0\\": 140,\\"1\\": 26},\\"flags\\": {},\\"order\\": 4,\\"mode\\": 0,\\"outputs\\": [{\\"name\\": \\"on_tick\\",\\"type\\": -1,\\"links\\": [13]}],\\"properties\\": {\\"interval\\": 1000,\\"event\\": \\"tick\\"},\\"boxcolor\\": \\"#222\\"}],\\"links\\": [[13,20,0,19,0,-1],[24,36,0,35,1,\\"number\\"],[25,18,1,35,0,\\"number,array,object\\"],[26,35,0,21,0,\\"number\\"],[27,36,0,37,1,\\"number\\"],[28,18,1,37,0,\\"number,array,object\\"],[29,37,0,38,0,\\"number,array,object\\"],[30,37,0,39,0,\\"number,array,object\\"],[31,40,0,38,1,\\"number\\"],[32,40,0,39,1,\\"number\\"],[33,38,0,41,0,\\"number\\"],[35,39,0,42,0,\\"number\\"],[37,21,0,43,0,0],[38,41,0,44,0,0],[39,42,0,45,0,0],[40,43,0,23,0,\\"string\\"],[41,24,0,23,1,\\"string\\"],[42,23,0,46,0,\\"string\\"],[44,46,0,47,0,\\"string\\"],[47,44,0,46,1,\\"string\\"],[49,24,0,47,1,\\"string\\"],[50,47,0,48,0,\\"string\\"],[51,45,0,48,1,\\"string\\"],[52,48,0,19,1,0]],\\"groups\\": [],\\"config\\": {},\\"extra\\": {},\\"version\\": 0.4}","children":[{"tag":"header","children":[{"text":"Header button","type":2,"id":"id0-0-l414mh4lgj4"}],"background":{"type":"color","color":"#F8DCDC","resourceUid":null,"transparency":0,"size":{"type":"default","width":{"measureType":"px","value":0},"height":{"measureType":"px","value":0}},"position":{"type":"top-left","offset":{"horizontal":{"measureType":"px","value":0},"vertical":{"measureType":"px","value":0}}}},"type":3,"id":"id0-0-mpooaakj46cd"},{"tag":"main","children":[{"useFixedWidth":true,"width":{"measureType":"px","value":"600"},"children":[{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Facilisis volutpat est velit egestas dui id ornare arcu odio. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Maecenas sed enim ut sem viverra aliquet eget sit amet. Donec ultrices tincidunt arcu non sodales neque. Amet cursus sit amet dictum sit amet justo donec enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Laoreet id donec ultrices tincidunt arcu non sodales.","color":"#E2E2E2","type":1,"id":"id0-0-pkk9bq93o2e","margins":{"top":{"measureType":"px","value":0},"bottom":{"measureType":"px","value":0},"left":{"measureType":"px","value":0},"right":{"measureType":"px","value":"200"}}},{"children":[{"children":[{"text":"Left","type":2,"id":"id0-0-039bbp34l520e"}],"background":{"type":"none","color":"#FFFFFF","resourceUid":null,"transparency":0,"size":{"type":"default","width":{"measureType":"px","value":0},"height":{"measureType":"px","value":0}},"position":{"type":"top-left","offset":{"horizontal":{"measureType":"px","value":0},"vertical":{"measureType":"px","value":0}}}},"type":3,"id":"id0-0-hiq5k0lcmed9"},{"children":[{"text":"Right","type":2,"id":"id0-0-4jo2dc272hh"}],"background":{"type":"none","color":"#FFFFFF","resourceUid":null,"transparency":0,"size":{"type":"default","width":{"measureType":"px","value":0},"height":{"measureType":"px","value":0}},"position":{"type":"top-left","offset":{"horizontal":{"measureType":"px","value":0},"vertical":{"measureType":"px","value":0}}}},"type":3,"id":"id0-0-p0qm61qnkol"}],"background":{"type":"none","color":"#FFFFFF","resourceUid":null,"transparency":0,"size":{"type":"default","width":{"measureType":"px","value":0},"height":{"measureType":"px","value":0}},"position":{"type":"top-left","offset":{"horizontal":{"measureType":"px","value":0},"vertical":{"measureType":"px","value":0}}}},"type":4,"id":"id0-0-0pomoicb1e7f"}],"background":{"type":"none","color":"#FFFFFF","resourceUid":null,"transparency":0,"size":{"type":"default","width":{"measureType":"px","value":0},"height":{"measureType":"px","value":0}},"position":{"type":"top-left","offset":{"horizontal":{"measureType":"px","value":0},"vertical":{"measureType":"px","value":0}}}},"type":3,"id":"id0-0-0onjn84l74p7","margins":{"top":{"measureType":"px","value":""},"bottom":{"measureType":"px","value":"25"},"left":{"measureType":"px","value":0},"right":{"measureType":"px","value":0}}},{"children":[{"children":[],"background":{"type":"none","color":"#FFFFFF","resourceUid":null,"transparency":0,"size":{"type":"default","width":{"measureType":"px","value":0},"height":{"measureType":"px","value":0}},"position":{"type":"top-left","offset":{"horizontal":{"measureType":"px","value":0},"vertical":{"measureType":"px","value":0}}}},"type":3,"id":"id0-0-inlg4pfc9f69"},{"children":[{"resourceUid":"guid-07","type":5,"id":"id0-0-ob43lf2ihm2"}],"background":{"type":"none","color":"#FFFFFF","resourceUid":null,"transparency":0,"size":{"type":"default","width":{"measureType":"px","value":0},"height":{"measureType":"px","value":0}},"position":{"type":"top-left","offset":{"horizontal":{"measureType":"px","value":0},"vertical":{"measureType":"px","value":0}}}},"type":3,"id":"id0-0-nmq5bi9lkqqe"},{"children":[{"resourceUid":"guid-09","type":5,"id":"id0-0-g9689e5qm3lg"}],"background":{"type":"none","color":"#FFFFFF","resourceUid":null,"transparency":0,"size":{"type":"default","width":{"measureType":"px","value":0},"height":{"measureType":"px","value":0}},"position":{"type":"top-left","offset":{"horizontal":{"measureType":"px","value":0},"vertical":{"measureType":"px","value":0}}}},"type":3,"id":"id0-0-9b2mjp991dl9"},{"children":[],"background":{"type":"none","color":"#FFFFFF","resourceUid":null,"transparency":0,"size":{"type":"default","width":{"measureType":"px","value":0},"height":{"measureType":"px","value":0}},"position":{"type":"top-left","offset":{"horizontal":{"measureType":"px","value":0},"vertical":{"measureType":"px","value":0}}}},"type":3,"id":"id0-0-e4lcmkj735k"}],"background":{"type":"color","color":"#574517","resourceUid":null,"transparency":0,"size":{"type":"default","width":{"measureType":"px","value":0},"height":{"measureType":"px","value":0}},"position":{"type":"top-left","offset":{"horizontal":{"measureType":"px","value":0},"vertical":{"measureType":"px","value":0}}}},"type":4,"id":"id0-0-lhmiia5ijnd","margins":{"top":{"measureType":"px","value":"25"},"bottom":{"measureType":"px","value":"25"},"left":{"measureType":"px","value":"25"},"right":{"measureType":"px","value":"25"}},"paddings":{"top":{"measureType":"px","value":"20"},"bottom":{"measureType":"px","value":"20"},"left":{"measureType":"px","value":"15"},"right":{"measureType":"px","value":"15"}}},{"children":[{"children":[{"text":"Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Scelerisque viverra mauris in aliquam sem fringilla. Amet tellus cras adipiscing enim eu. Venenatis a condimentum vitae sapien pellentesque. Arcu non sodales neque sodales ut etiam sit amet nisl. Augue eget arcu dictum varius duis. Lorem ipsum dolor sit amet consectetur. Dignissim convallis aenean et tortor at risus. Pellentesque nec nam aliquam sem et tortor consequat. Justo eget magna fermentum iaculis eu non diam. Enim praesent elementum facilisis leo. Turpis in eu mi bibendum neque egestas congue quisque. Ante metus dictum at tempor commodo ullamcorper. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Non nisi est sit amet facilisis magna etiam. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Venenatis a condimentum vitae sapien.","color":"#FFFFFF","type":1,"id":"id0-0-jdag5jkeokdd"},{"text":"Tristique senectus et netus et malesuada fames ac. Cursus in hac habitasse platea dictumst quisque sagittis purus. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Integer enim neque volutpat ac tincidunt vitae. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Tellus id interdum velit laoreet id donec ultrices tincidunt. Montes nascetur ridiculus mus mauris. Proin gravida hendrerit lectus a. Odio ut sem nulla pharetra diam sit. Habitant morbi tristique senectus et netus et malesuada fames ac. Habitasse platea dictumst quisque sagittis purus. Ipsum a arcu cursus vitae congue mauris. Vivamus at augue eget arcu dictum. Tincidunt augue interdum velit euismod in. Sed felis eget velit aliquet sagittis id consectetur purus ut.","color":"#FFFFFF","type":1,"id":"id0-0-defikhqf59nb"},{"children":[{"text":"Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Leo duis ut diam quam nulla porttitor massa id. Netus et malesuada fames ac turpis. Est placerat in egestas erat imperdiet sed euismod nisi porta. Auctor neque vitae tempus quam pellentesque nec nam. Mauris sit amet massa vitae tortor condimentum lacinia. Placerat vestibulum lectus mauris ultrices. Risus sed vulputate odio ut enim. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Arcu non sodales neque sodales ut etiam sit amet. Dui ut ornare lectus sit amet est placerat. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Arcu cursus euismod quis viverra nibh cras pulvinar. Orci sagittis eu volutpat odio facilisis mauris. Egestas sed sed risus pretium. Augue neque gravida in fermentum et sollicitudin ac orci. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.","color":"#FFFFFF","type":1,"id":"id0-0-kgl2nigmf78"},{"text":"Learn More","type":2,"id":"id0-0-87gehaeqncp6"}],"background":{"type":"none","color":"#FFFFFF","resourceUid":null,"transparency":0,"size":{"type":"default","width":{"measureType":"px","value":0},"height":{"measureType":"px","value":0}},"position":{"type":"top-left","offset":{"horizontal":{"measureType":"px","value":0},"vertical":{"measureType":"px","value":0}}}},"type":3,"id":"id0-0-4ef2hc4fb09i"}],"background":{"type":"none","color":"#FFFFFF","resourceUid":null,"transparency":0,"size":{"type":"default","width":{"measureType":"px","value":0},"height":{"measureType":"px","value":0}},"position":{"type":"top-left","offset":{"horizontal":{"measureType":"px","value":0},"vertical":{"measureType":"px","value":0}}}},"type":4,"id":"id0-0-780gla3ffmdm"}],"background":{"type":"color","color":"#504A09","resourceUid":null,"transparency":46,"size":{"type":"default","width":{"measureType":"px","value":0},"height":{"measureType":"px","value":0}},"position":{"type":"top-left","offset":{"horizontal":{"measureType":"px","value":0},"vertical":{"measureType":"px","value":0}}}},"type":3,"id":"id0-0-hql7eold3oj","paddings":{"top":{"measureType":"px","value":"20"},"bottom":{"measureType":"px","value":"20"},"left":{"measureType":"px","value":"15"},"right":{"measureType":"px","value":"15"}}}],"background":{"type":"image","color":"#EAF0C2","resourceUid":"guid-04","transparency":0,"size":{"type":"cover","width":{"measureType":"px","value":0},"height":{"measureType":"px","value":0}},"position":{"type":"center","offset":{"horizontal":{"measureType":"px","value":0},"vertical":{"measureType":"px","value":0}}}},"type":3,"id":"id0-0-h39lk4p5ppfb","paddings":{"top":{"measureType":"px","value":"25"},"bottom":{"measureType":"px","value":0},"left":{"measureType":"px","value":0},"right":{"measureType":"px","value":0}}},{"tag":"footer","children":[{"text":"Footer Text","type":1,"id":"id0-0-5j6b8kkmbhgk","paddings":{"top":{"measureType":"px","value":"15"},"bottom":{"measureType":"px","value":"15"},"left":{"measureType":"px","value":"15"},"right":{"measureType":"px","value":"15"}}}],"background":{"type":"color","color":"#F0F0F0","resourceUid":null,"transparency":0,"size":{"type":"default","width":{"measureType":"px","value":0},"height":{"measureType":"px","value":0}},"position":{"type":"top-left","offset":{"horizontal":{"measureType":"px","value":0},"vertical":{"measureType":"px","value":0}}}},"type":3,"id":"id0-0-21k9mib652a9"}],"background":{"type":"none","color":"#FFFFFF","resourceUid":null,"transparency":0,"size":{"type":"default","width":{"measureType":"px","value":0},"height":{"measureType":"px","value":0}},"position":{"type":"top-left","offset":{"horizontal":{"measureType":"px","value":0},"vertical":{"measureType":"px","value":0}}}},"type":0,"id":"id0-0"}');
  }

  public static getExample2(): INodeModel {
    return {
      type: 0,
      id: 'id0-1',
      title: 'Page #1',
      graphModel: '{"last_node_id": 48,"last_link_id": 52,"nodes": [{"id": 18,"type": "basic/time","pos": [27,58],"size": {"0": 140,"1": 46},"flags": {},"order": 1,"mode": 0,"outputs": [{"name": "in ms","type": "number","links": null},{"name": "in sec","type": "number","links": [25,28]}],"properties": {}},{"id": 36,"type": "basic/const","pos": [-1,228],"size": [180,30],"flags": {},"order": 0,"mode": 0,"outputs": [{"name": "value","type": "number","links": [24,27],"label": "3600.000"}],"properties": {"value": 3600}},{"id": 35,"type": "math/operation","pos": [209,62],"size": [100,60],"flags": {},"order": 5,"mode": 0,"inputs": [{"name": "A","type": "number,array,object","link": 25},{"name": "B","type": "number","link": 24}],"outputs": [{"name": "=","type": "number","links": [26]}],"properties": {"A": 2276.612799999997,"B": 3600,"OP": "/"}},{"id": 37,"type": "math/operation","pos": [220,170],"size": [100,60],"flags": {},"order": 6,"mode": 0,"inputs": [{"name": "A","type": "number,array,object","link": 28},{"name": "B","type": "number","link": 27}],"outputs": [{"name": "=","type": "number","links": [29,30]}],"properties": {"A": 2276.612799999997,"B": 3600,"OP": "%"}},{"id": 38,"type": "math/operation","pos": [355,136],"size": [100,60],"flags": {},"order": 8,"mode": 0,"inputs": [{"name": "A","type": "number,array,object","link": 29},{"name": "B","type": "number","link": 31}],"outputs": [{"name": "=","type": "number","links": [33]}],"properties": {"A": 2276.612799999997,"B": 60,"OP": "/"}},{"id": 39,"type": "math/operation","pos": [355,250],"size": [100,60],"flags": {},"order": 9,"mode": 0,"inputs": [{"name": "A","type": "number,array,object","link": 30},{"name": "B","type": "number","link": 32}],"outputs": [{"name": "=","type": "number","links": [35]}],"properties": {"A": 2276.612799999997,"B": 60,"OP": "%"}},{"id": 40,"type": "basic/const","pos": [111,304],"size": [180,30],"flags": {},"order": 2,"mode": 0,"outputs": [{"name": "value","type": "number","links": [31,32],"label": "60.000"}],"properties": {"value": 60}},{"id": 21,"type": "math/floor","pos": [356,61],"size": [80,30],"flags": {"collapsed": false},"order": 7,"mode": 0,"inputs": [{"name": "in","type": "number","link": 26}],"outputs": [{"name": "out","type": "number","links": [37]}],"properties": {}},{"id": 43,"type": "string/toString","pos": [466,60],"size": {"0": 140,"1": 26},"flags": {},"order": 10,"mode": 0,"inputs": [{"name": "a","type": 0,"link": 37}],"outputs": [{"name": "out","type": "String","links": [40]}],"properties": {}},{"id": 41,"type": "math/floor","pos": [475,139],"size": [80,30],"flags": {"collapsed": false},"order": 11,"mode": 0,"inputs": [{"name": "in","type": "number","link": 33}],"outputs": [{"name": "out","type": "number","links": [38]}],"properties": {}},{"id": 42,"type": "math/floor","pos": [474,251],"size": [80,30],"flags": {"collapsed": false},"order": 12,"mode": 0,"inputs": [{"name": "in","type": "number","link": 35}],"outputs": [{"name": "out","type": "number","links": [39]}],"properties": {}},{"id": 45,"type": "string/toString","pos": [581,260],"size": {"0": 140,"1": 26},"flags": {},"order": 15,"mode": 0,"inputs": [{"name": "a","type": 0,"link": 39}],"outputs": [{"name": "out","type": "String","links": [51]}],"properties": {}},{"id": 44,"type": "string/toString","pos": [574,136],"size": {"0": 140,"1": 26},"flags": {},"order": 14,"mode": 0,"inputs": [{"name": "a","type": 0,"link": 38}],"outputs": [{"name": "out","type": "String","links": [47]}],"properties": {}},{"id": 24,"type": "basic/string","pos": [30,473],"size": [180,30],"flags": {},"order": 3,"mode": 0,"outputs": [{"name": "","type": "string","links": [41,49]}],"properties": {"value": ":"}},{"id": 23,"type": "string/concatenate","pos": [251,416],"size": {"0": 140,"1": 46},"flags": {},"order": 13,"mode": 0,"inputs": [{"name": "a","type": "string","link": 40},{"name": "b","type": "string","link": 41}],"outputs": [{"name": "out","type": "string","links": [42]}],"properties": {}},{"id": 46,"type": "string/concatenate","pos": [424,390],"size": [140,46],"flags": {},"order": 16,"mode": 0,"inputs": [{"name": "a","type": "string","link": 42},{"name": "b","type": "string","link": 47}],"outputs": [{"name": "out","type": "string","links": [44]}],"properties": {}},{"id": 47,"type": "string/concatenate","pos": [577,461],"size": {"0": 140,"1": 46},"flags": {},"order": 17,"mode": 0,"inputs": [{"name": "a","type": "string","link": 44},{"name": "b","type": "string","link": 49}],"outputs": [{"name": "out","type": "string","links": [50]}],"properties": {}},{"id": 48,"type": "string/concatenate","pos": [743,344],"size": {"0": 140,"1": 46},"flags": {},"order": 18,"mode": 0,"inputs": [{"name": "a","type": "string","link": 50},{"name": "b","type": "string","link": 51}],"outputs": [{"name": "out","type": "string","links": [52]}],"properties": {}},{"id": 19,"type": "basic/console","pos": [844,505],"size": {"0": 140,"1": 46},"flags": {},"order": 19,"mode": 3,"inputs": [{"name": "log","type": -1,"link": 13},{"name": "msg","type": 0,"link": 52}],"properties": {"msg": "0:37:56"}},{"id": 20,"type": "events/timer","pos": [602,576],"size": {"0": 140,"1": 26},"flags": {},"order": 4,"mode": 0,"outputs": [{"name": "on_tick","type": -1,"links": [13]}],"properties": {"interval": 1000,"event": "tick"},"boxcolor": "#222"}],"links": [[13,20,0,19,0,-1],[24,36,0,35,1,"number"],[25,18,1,35,0,"number,array,object"],[26,35,0,21,0,"number"],[27,36,0,37,1,"number"],[28,18,1,37,0,"number,array,object"],[29,37,0,38,0,"number,array,object"],[30,37,0,39,0,"number,array,object"],[31,40,0,38,1,"number"],[32,40,0,39,1,"number"],[33,38,0,41,0,"number"],[35,39,0,42,0,"number"],[37,21,0,43,0,0],[38,41,0,44,0,0],[39,42,0,45,0,0],[40,43,0,23,0,"string"],[41,24,0,23,1,"string"],[42,23,0,46,0,"string"],[44,46,0,47,0,"string"],[47,44,0,46,1,"string"],[49,24,0,47,1,"string"],[50,47,0,48,0,"string"],[51,45,0,48,1,"string"],[52,48,0,19,1,0]],"groups": [],"config": {},"extra": {},"version": 0.4}',
      children: [
        {
          type: 3,
          id: 'id0-2',
          tag: 'article',
          children: [
            {
              type: 1,
              id: 'id0-3',
              text: 'Text 2',
            } as INodeModel,
            {
              type: 1,
              id: 'id0-4',
              text: 'Text 3',
            } as INodeModel,
            {
              type: 2,
              id: 'id0-5',
              text: 'Button text #1',
            } as INodeModel,
          ],
        } as INodeModel,
        {
          type: 4,
          id: 'id0-7',
          background: {
            type: 'color',
            color: '#eaeaea',
          },
          paddings: {
            top: {
              value: 15,
              measureType: 'px',
            },
            bottom: {
              value: 15,
              measureType: 'px',
            },
            left: {
              value: 15,
              measureType: 'px',
            },
            right: {
              value: 15,
              measureType: 'px',
            },
          },
          children: [
            {
              type: 3,
              id: 'id0-8',
              tag: 'div',
              background: {
                type: 'color',
                color: '#333333',
              },
              children: [
                {
                  type: 5,
                  id: 'id0-11',
                  resourceUid: 'guid-07',
                  altText: 'Custom Alt',
                  title: 'TITLE #01',
                  margins: {
                    top: {
                      value: 5,
                      measureType: 'px',
                    },
                    bottom: {
                      value: 5,
                      measureType: 'px',
                    },
                    left: {
                      value: 5,
                      measureType: 'px',
                    },
                    right: {
                      value: 5,
                      measureType: 'px',
                    },
                  },
                } as INodeModel,
              ],
            } as INodeModel,
            {
              type: 3,
              id: 'id0-9',
              tag: 'div',
              background: {
                type: 'color',
                color: '#333333',
              },
              children: [
                {
                  type: 5,
                  id: 'id0-12',
                  resourceUid: 'guid-08',
                  title: 'TITLE #02',
                  margins: {
                    top: {
                      value: 5,
                      measureType: 'px',
                    },
                    bottom: {
                      value: 5,
                      measureType: 'px',
                    },
                    left: {
                      value: 5,
                      measureType: 'px',
                    },
                    right: {
                      value: 5,
                      measureType: 'px',
                    },
                  },
                } as INodeModel,
              ],
            } as INodeModel,
            {
              type: 3,
              id: 'id0-10',
              tag: 'div',
              background: {
                type: 'color',
                color: '#333333',
              },
              children: [
                {
                  type: 5,
                  id: 'id0-13',
                  resourceUid: 'guid-09',
                  title: 'TITLE #03',
                  margins: {
                    top: {
                      value: 5,
                      measureType: 'px',
                    },
                    bottom: {
                      value: 5,
                      measureType: 'px',
                    },
                    left: {
                      value: 5,
                      measureType: 'px',
                    },
                    right: {
                      value: 5,
                      measureType: 'px',
                    },
                  },
                } as INodeModel,
              ],
            } as INodeModel,
          ],
        } as INodeModel,
        {
          type: 2,
          id: 'id0-6',
          text: 'Button text #1',
          title: 'YANDEX',
          actionType: 'link',
          linkType: 'external-link',
          linkText: 'http://ya.ru',
        } as INodeModel,
      ],
    };
  }
}
import { defineClientConfig } from "@vuepress/client";
import JsbaseAudio from "./components/JsbaseAudio.vue";
import JsbaseWordAudio from "./components/JsbaseWordAudio.vue";
import JsbaseWordImage from "./components/JsbaseWordImage.vue";
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("JsbaseAudio", JsbaseAudio);
    app.component("JsbaseWordAudio", JsbaseWordAudio);
    app.component("JsbaseWordImage", JsbaseWordImage);
  },
  setup() {},
  rootComponents: [],
});

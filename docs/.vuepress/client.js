import { defineClientConfig } from "@vuepress/client";
import JsbaseAudio from "./components/JsbaseAudio.vue";
import JsbaseWordAudio from "./components/JsbaseWordAudio.vue";
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("JsbaseAudio", JsbaseAudio);
    app.component("JsbaseWordAudio", JsbaseWordAudio);
  },
  setup() {},
  rootComponents: [],
});

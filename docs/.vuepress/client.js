import { defineClientConfig } from "@vuepress/client";
import JsbaseAudio from "./components/JsbaseAudio.vue";
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("JsbaseAudio", JsbaseAudio);
  },
  setup() {},
  rootComponents: [],
});

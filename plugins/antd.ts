import { defineNuxtPlugin } from "#app";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.dark.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Antd);
});

import { createApp } from "vue";
import { router } from "@/util/routes/routes";
import App from "./App.vue";
import "./global.css";

const app = createApp(App);
app.use(router);
app.mount("#app");

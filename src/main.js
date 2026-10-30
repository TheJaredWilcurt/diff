import { createApp } from 'vue';
import constantsPlugin from 'vue-options-api-constants-plugin';

import App from '@/App.vue';

import '@/assets/main.css';

const app = createApp(App);
app.use(constantsPlugin);
app.mount('#app');

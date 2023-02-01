import { createApp } from 'vue'; //هون انا قاعد بجيب فنكنشن من باكيج والباكيج بس بكتب اسمها مش زي الفايل تحت
import App from './App.vue'; //هاي ديفولت امبورت للاشي اللي معموله ديفولت اكسبورت بالفايل اما اللي فوق اسمه نيمد امبورت
import FriendContact from './components/FreindContatct.vue';

const app = createApp(App);

app.component('friend-contact', FriendContact);//هون زي كأنه سجلنا الكمبوننت بالــأب الكبير
app.mount('#app');

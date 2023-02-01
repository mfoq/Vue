import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue'; //امبورت للكمبوننت الجديد
import NewFriend from './components/NewFriend.vue'; //امبورت للكمبوننت الجديد


const app = createApp(App);

app.component('friend-contact', FriendContact); // هون انا هيك كريتت تاج الااتش تي ام ال اللي بدي استخدمها ك كمبوننت ومعها الكونفيجيريشن اوبجيكت
app.component('new-friend', NewFriend);

app.mount('#app');

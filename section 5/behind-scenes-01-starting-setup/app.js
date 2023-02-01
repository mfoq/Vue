const app = Vue.createApp({
  // template: `<p>{{ message }}</p>`,
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText);
    },
  },
  beforeCreated(){
    console.log('beforeCreated()');
  }
});

app.mount('#app');

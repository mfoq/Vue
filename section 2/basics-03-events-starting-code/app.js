const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmedInput()
    {
      this.confirmedName =this.name;
    },
    submitForm()
    {
      alert("submitted form");
    },
    setName(event,lastname)
    {
      this.name = event.target.value;
    },
    add()
    {
      this.counter++;
    },
    remove()
    {
      this.counter--;
    }
  },
});

app.mount('#events');

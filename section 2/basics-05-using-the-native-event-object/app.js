const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
      // fullname: '',
    };
  },
  watch:{
    /*
      - هاي الواتش معناها انه اي تغغير بصير على الفاريابيل نيم اللي شغلي هذا الواتش
      - الاسم لازم يكون نفس اسم الفاريابيل عشان الفيو تفهمه للواتشر ولايش يتبع
      - الفاليو هاي اللي بالواتشر بتكون ضمنيا بستقبلها وهي القيمه تاعت الفاريابيل اللي بنفس اسم الفنكشن
      - برضو بتوخذ قيمه ثانيه هي الاولد فالو في حال احتجتها
    */
   counter(value){
    if(value > 50){
      const that = this; //هاي عشان الكول بام فنكشن يفهم شو الذيس
    setTimeout(()=>{
       that.counter = 0;
      }, 2000);
     }
   }
    // name(value)
    // {
    //   if(value === ''){
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + " "  + this.lastname;
    //   }
    // },
    // lastname(value)
    // {
    //   if(value === ''){
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + " "  + value;
    //   }
    // },
  },
  computed: {
    fullName()
    {
      if(this.name === '' || this.lastname === ''){
        return '';
      } 
        return this.name + ' ' + this.lastname;
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput()
    {
      this.name ='';
    },
  }
});

app.mount('#events');

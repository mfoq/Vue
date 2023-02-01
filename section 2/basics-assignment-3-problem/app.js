const app = Vue.createApp({
    data(){
        return {
            counter: 0,
            result: '',
        };
    },
    computed:{
        computedCounter()
        {
            if(this.result < 37){
                return "Not there yet";
            } else if(this.result === 37) {
                return this.result;
            } else {
                return "Too much!";
            }
        },
    },
    watch: {
        result(currentVal)
        {
            const that =this;
            setTimeout(function(){
                that.result = 0;
            }, 5000);
            
        }
    },
    methods: {
        add(num){
            this.counter+=num;
            this.setResult();
        }, 
        setResult(){
            this.result = this.counter;
        }
    }
});

app.mount('#assignment')
const app = Vue.createApp({
    data(){
        return {
            InputClass: '',
            ToggleClass: true,
            valueInput: '',
        };  
    },
    computed:{
        addClasses(){
            if(this.InputClass == 'user1' || this.InputClass == 'user2' ){
                return this.InputClass;
            }else if(this.InputClass === 'user1user2' || this.InputClass === 'user1 user2'){
                return "user1 user2";
            } else{
                return '';
            }
        },
        toggleComputed(){
            if(this.ToggleClass){
                return 'visible';
            } else{
                return 'hidden';
            }
        }, 
       
    },
    methods: {
        toggle(){
            this.ToggleClass = !this.ToggleClass;
        }
    }
});

app.mount('#assignment');
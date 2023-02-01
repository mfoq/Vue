const app = Vue.createApp({
    data(){
            return {
                enteredTask:'',
                Tasks: ['task1'],
                showTasks: true,
            };
    } , 
    computed:{
        buttonCaption(){
            if(!this.showTasks) {
                return 'Show tasks';
            }else {
                return 'Hide tasks';
            }
        }
    },
     methods: {
            addTask(){
                this.Tasks.push(this.enteredTask);
                this.enteredTask = '';
            },
            toggleClass(){
                this.showTasks = !this.showTasks;
                console.log('hidden');
            }
    }
});

app.mount('#assignment');
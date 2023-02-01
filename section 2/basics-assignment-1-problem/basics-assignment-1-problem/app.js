const app = Vue.createApp({
    data(){
        return{
            name: "Mahmooud Alfoqahaa",
            Age: 23,
            ImageLink: "https://www.qries.com/images/banner_logo.png",
            // testHtml: "<h1>Header</h1>",
        }
    },
    methods: {
        AgePlusFive(){
            return this.Age + 5 ;
        },
        randomNumber()
        {
            return Math.random();
        },
        returnName(){
            return this.name;
        }
    }
});

app.mount('#assignment');
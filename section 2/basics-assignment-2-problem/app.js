const app = Vue.createApp({
    data()
    {
        return {
            dummyText: "Hello Trash",
            userInput: '',
            userInput2: '',
        };
    } , 
    methods: {
        ShowAlert()
        {
            alert(this.dummyText);
        },
        setUserInput(event)
        {
            this.userInput = event.target.value;
        },
        setUserInput2(event)
        {
            this.userInput2 = event.target.value;
        },
    },
});

app.mount("#assignment");
const app = Vue.createApp({
    data() {
        return {
            friends : [
                {
                    id: 'manuel', 
                    name: 'manuel Subhi',
                    phone: '9424 2342 24',
                    email: 'mail@cit.com'
                },
                {
                    id: 'samer', 
                    name: 'Same Alnabrisi',
                    phone: '4345 0522 66',
                    email: 'notmail@cit.com'
                }
            ],
        };
    } ,
});

app.component('friend-contact',{
    template: `
        <li>
            <h2>{{ friend.name}}</h2>
            <button @click="toggleDetails()">{{detailsAreVisible ? 'hide': 'show'}} Details</button>
            <ul v-show="detailsAreVisible">
                <li><strong>Phone:</strong> {{ friend.phone}}</li>
                <li><strong>Email:</strong> {{ friend.email}}</li>
            </ul>
        </li>`, 
    data(){
        return {
            detailsAreVisible: false,
            friend: {
                    id: 'manuel', 
                    name: 'manuel Subhi',
                    phone: '9424 2342 24',
                    email: 'mail@cit.com'
            },
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }

} ); //Identifer , config object(like another Vue App(can have data and methods) but this object will be connected to the Big Object)

app.mount('#app');
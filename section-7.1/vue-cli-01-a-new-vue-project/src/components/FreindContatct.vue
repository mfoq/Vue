<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show'  }}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong>{{ friend.phone}}</li>
            <li><strong>Email: </strong>{{ friend.email}}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        data(){ //هاي الداتا بس مقتصره على التمبليت اللي بنفس الأبب
            return {
                detailsAreVisible: false,
                friend: {
                    id: 'manuel',
                    name: 'manuel Lorenz',
                    phone: '0123 4566 90',
                    email: 'm@g.com'
                },
            };
        },
        methods: {
            toggleDetails(){
                this.detailsAreVisible = !this.detailsAreVisible;
            }
        }
    };
</script>
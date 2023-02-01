<template>
    <form @submit.prevent="submitData()"> <!--هاي تعني امنع السبمت(الريلود) وناديلي هذا الفنكشن-->
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName">
        </div>
        <div>
            <label>Phone</label>
            <input type="tel" v-model="enteredPhone">
        </div>
        <div>
            <label>E-Mail</label>
            <input type="email" v-model="enteredEmail">
        </div>
        <div>
            <button>Add Contact</button>
        </div>
    </form>
</template>

<script>
    //كونفيجريشن اوبجيكت
    export default {
        emits: ['add-contact'],
        data(){
            return {
                enteredName: '',
                enteredPhone: '',
                enteredEmail: '',
            };
        },
        methods: {
            submitData(){
                this.$emit( // هون انا فرودت الداتا للكمبوننت الكبير مع ايفنت الادد كونتات اللي هو راح يستخدمها
                    'add-contact',
                    this.enteredName,
                    this.enteredPhone,
                    this.enteredEmail
                );
            }
        },
    }; 
</script>

<style>

</style>
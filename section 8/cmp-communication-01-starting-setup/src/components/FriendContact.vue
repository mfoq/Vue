<template>
  <li>
    <h2>{{ namee }} {{ favorite ? '(favorite)' : '' }}</h2>
    <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite()">toggleFavorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="deleteFriend()">Delete</button>
  </li>
</template>

<script>

export default {
  props : {
    id: {
      type: String,
      required: true,
    },
    namee : {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: String,
    favorite: {
        type: Boolean,
        required: false,
        default: false,
        // validatior: function(value){ // هاي زي لوجيك انا بعمله على الفاليو اللي هي نفسها البروب 
        //   return value === '1' || value === '0'
        // }
    },
  },
  emits: ['toggle-favorite', 'delete'], //this is simple way to define custome events
//   emits: { //هاي الطريقة الادفانس بتساعد الديفلوبرز تو كاتش ايرورز وجطيت الاي دي لانه تحت بناءا ع هالايفنت بعثت الاي دي ف هون استخدمته
//   'toggle-favorite' : function(id){ 
//     if(id){
//       return true;
//     } else {
//       console.warn('id is Missing!')
//       return false;
//     }
//   },

// }, 
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
      this.$emit('toggle-favorite', this.id); //هون دايما لازم استخدم الكباب كيس وهون زي كأني بعمل كستوم ايفنت وراح استخدمه بالكمبوننت وبعتله داتا عشان بالكمبوننت الاب احدد اي داتا بالضبط بدي اعدلها
    },
    deleteFriend(){
      this.$emit('delete',this.id);
    }
  }
};
</script>
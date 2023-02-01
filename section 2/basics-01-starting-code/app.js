const app = Vue.createApp({// هون انا كريتت فيوا اوبجيكت فيه الميثودز الخاصه فيه وعدته وكل اموره وبدي ابلش اكتب اللوجيك تاعي فيه كأوبجيكت

    data() { //هاي الداتا لازم يكون اسمها داتا اما بهاي الطريقه او الطريقه الثانيه الكي وفاليو عادي بس هاي اريح
        return {
            courseGoalA: 'Finish The Course and learn Vue!', //هاي عادي اي اسم مش شرط اسم معين وطبعا هاي الداتا بتكون متاحه جوا الاتش تي ام ال جوا الاي دي اللي جبته بالماونت واولاده طبعا
            courseGoalB: 'Master Vue With Laravel!',
            vueLink: 'https://vuejs.org/',
        };
    },
    methods: {
        outputGoal(){
            const rand = Math.random();
            if(rand > 0.5){
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }

}); 

app.mount('#user-goal'); //هون انا عملت تارجت على العنصر اللي بده يتنفذ فيه الابب اوبجيكت اللي سويته فوق
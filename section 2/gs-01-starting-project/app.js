Vue.createApp({          //الفيو هون هو اوبجيكت جاهز من الفيو والكرييت ابب ميثود عشان ابلش كرييته لبروجيكت وبوخذ اوبجيكت فيه خلينا نقول السيتنجز تاعت البروجيكت الداتا والميثودز
    data(){ //هاي لازم يكون اسمها داتا وهاي طريقة واحد للكتابه الطريقه الثانيه تحت بالميثود
        return {
            goals: [],
            enterdValues: ''
        };
    }, 
    methods: { //الطريقه الثانيه هاي
        addGoal() { 
            if(this.enterdValues !== '') {
                this.goals.push(this.enterdValues);
                this.enterdValues = '';
            }
        }
    }

}).mount('#app');  //هاي الماونت هي مثيود جاهزه عشان ترندر هاي الشغلات وين وهون اخترت اي دي الاي بالاتش تي ام ال




// let btn = document.getElementById('addGoalBtn');
// let input = document.getElementById('goal');
// let list = document.getElementById('goals');



// btn.onclick = function(){
//     let li = document.createElement('li');
//     let text = document.createTextNode(input.value);
//     li.append(text);
//     input.value="";
    
//     list.appendChild(li);
// };

Vue.createApp({
 
    data(){
 
        return{

          goals:[],
          textToAdd:"",
          goalId:0
          
        };
 
    },
 
    computed:{
 
 
    },
 
    methods:{
      addToGoals(){

        const obj = {id: this.id, text:this.textToAdd};
        this.goals.push(obj);

        this.goalId++

        this.textToAdd = "";
      },
      deleteGoal(id){
        this.goals.splice(id,1);
      }
 
    }
 
}).mount('#user-goals');
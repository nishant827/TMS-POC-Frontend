export const loggedUser=(state=false,action)=>{
   switch(action.type){
       case 'SIGN_IN':
           return !state;
       case "SIGN_OUT":
           
           return false;
           default:
               return state;
   }
}

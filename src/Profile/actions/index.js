export const signIn=()=>{
    return{
        type:"SIGN_IN"
    }
}
export const signOut=()=>{
    console.log("calling signout function");
    return {
        type:"SIGN_OUT"
    }
}
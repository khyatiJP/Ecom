import firebase  from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyD3EU-F-sSshPM04kL1SSdG1yxwsdCI_9I",
    authDomain: "ecom-d3a36.firebaseapp.com",
    projectId: "ecom-d3a36",
    storageBucket: "ecom-d3a36.appspot.com",
    messagingSenderId: "1076894342894",
    appId: "1:1076894342894:web:59ed90adfd4c2a1cc65dff",
    measurementId: "G-V6N67W19F1"
}
export const createUserProfile =async(userauth,AdditionData)=>{
if(!userauth) return;

const userRef= firestore.doc('/User/Nq16ppzIcKHfZQ9qYAXp');
const userSnap=await userRef.get();

if(userSnap.exists)
{  
    const {displayName,email}=userauth;
    const cdate= new Date();
    try{
        await userRef.set({
            displayName,
            email,
            cdate,
            ...AdditionData
        })
    }
    catch{

    }
}
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'})

export const signWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;
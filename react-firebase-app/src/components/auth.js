import {auth} from '../config/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {useState} from 'react';


export const Auth = () =>{
    

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    // console.log(auth?.currentUser?.email)
    const signIn = async() =>{
        try{
        await createUserWithEmailAndPassword(auth,email,password)
        }
        catch(e){
            console.error(e)
        }
    };

    return(
        <div>
            <input onChange = {(e)=>setEmail(e.target.value)}placeholder="Enter email...."/>
            <input type="password" onChange ={(e) => setPassword(e.target.value)}placeholder="Enter password..."/>
            <button onClick={signIn}>Login</button>
        </div>
    )
}
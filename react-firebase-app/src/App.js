import logo from './logo.svg';
import './App.css';
import  {Auth} from './components/auth'
import {db} from './config/firebase'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

function App() {

  const [user, setUser] = useState([]);
  const usersCollectionList = collection(db,"users");

  useEffect(() =>{
    const getUserList = async () => {
      try{
      const data = await getDocs(usersCollectionList)
      
      const filteredUser = data.docs.map((doc) =>({
        ...doc.data(),
        id:doc.id}));

      setUser(filteredUser); 
      }
      catch(e){
        console.error(e);
      }
    };
    getUserList();
  },[])
  


  return (
    <div className="App">
      <Auth/>
      <div>
        {user.map((user1) =>(
          <div>
            <h1>{user1.emailId}</h1>
            <h2>{user1.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

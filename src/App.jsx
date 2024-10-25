/* import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [name,setNmae] = useState("")
  useEffect(()=>{
    const getname = async()=>{
      const res = await axios.get('http://localhost:3500/getName')
      setNmae(res.data.name)
     
    }
    getname()
},[name])



  
  return (
    <>
    <h1>My name is{name}</h1>  
    </>
  )
}

export default App
 */

import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
  axios.defaults.baseURL = 'http://localhost:3500'
  useEffect(() => {
    const getName = async () => {
      try {
        const res = await axios.get('/getName',{
          headers:{
            Authorization:"Bearer"+"ankit",
          },
          params:{
            id:'123@'
          }
        }); // Assuming '/getName' is the correct endpoint
        setName(res.data.name); // Corrected the typo in setName
      } catch (error) {
        console.log(error); // Catch and log the error properly
      }
    };
  
    getName(); // Call the async function to fetch the name
  }, [name]); // E

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log("form submitted",{email,pass});
};

  
  return (
    <>
   <div>
    <form onSubmit={handleSubmit}>
      <input type="pasword" value={pass} onChange={(e)=>setName(e.target.value)}/>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <button type='submit' >Subbmit</button>
    </form>
   </div>
    </>
  )
}

export default App



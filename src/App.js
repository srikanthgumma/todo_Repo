import { useEffect, useState } from "react";
import './App.css';

function App() {
  
    let todoStyle ={
      color:"white",
      overflowY:"auto",
      margin:"auto" ,
      marginTop:"6%",
      width:"450px",
      border:"none",
      padding:"40px",
      borderRadius:"14px",
      backgroundColor:"black"
   }

let [val,setval]=useState('');
let [aray,setaray]= useState([]);

// submit function...
let todo=(e)=>{
  
  e.preventDefault();
console.log(e.target[0].value);
if(e.target[0].value!==''){
setval(e.target[0].value)

} else{
  alert("should not be empty");
}
e.target[0].value="";
}

useEffect(()=>{
  if(val!==''){
  setaray([...aray,val])
  }
},[val])
console.log(val);
console.log(aray);


let data=aray.map((a,b,c)=>{
  return (
      <div style={{marginTop:"2px",backgroundColor:"white",width:"100%"}}>
          <h1 style={{color:"black",width:"100%",margin:"none"}}>{a}</h1>
          <button onClick={(e)=>{
              e.preventDefault();
              let pp=prompt(`Edit the text ${a}`)
              if(pp!==''){
              c.splice(b,1,pp);
              setaray([...aray])
              } else{
                  alert("should not be empty")
              }
          }} id="editbut">EDIT</button>
          <button onClick={(e)=>{
              e.preventDefault();
              c.splice(b,1);
              setaray([...aray])
          }} id="delbut">DELETE</button>
      </div>
  )
})

  return (
      <div style={todoStyle}>
          <h1 style={{fontSize:"20px"}}>To-Do React App</h1>
          {/* <h3 style={{fontSize:"15px"}}>It does not take same values and empty values</h3> */}
          <form action="" onSubmit={todo} style={{marginTop:'40px',width:"100%"}}>
              <input type="text" placeholder="Type something" id="inp" style={{width:'70%',height:'40px'}}/>
              <input type="submit" value='ADD' id="inp" style={{width:'28%',height:'44px'}}/>
          </form>
          <h1>{data}</h1>
      </div>
  

  );
}

export default App;

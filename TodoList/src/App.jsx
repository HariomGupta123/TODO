
import { useState } from 'react';
import './App.css'
import AddTodo from './AddTodo';

const App=()=>{
  const [input,setInput]=useState('')
  const [list,setList]=useState([]);
 const Add=()=>{
  if(!input==""){
  setList((oldlist)=>{
    return(
      
        [...oldlist,input]
   
    )
  })}
  setInput('')
 
 }
 const remove=(id)=>{
  setList((oldlist)=> {
    return oldlist.filter((arry, index) => {
      return index !== id;
    });
  });
        
  
 }
  return<>
<h1 style={{backgroundColor:"red",width:400}}>todo list</h1>
<div className='todo'>
<h1 style={{color:"black"}}>hariom</h1>
<input type='text' placeholder='add your todo' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
<button onClick={Add}>add</button>
</div>
<div className='add' >
{ list.map((arr,index)=>{
  return(
 <AddTodo input={arr} key={index} id={index} onSelect={remove} />)})
 }


</div>
  </>
}
export default App;
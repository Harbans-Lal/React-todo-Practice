import React, { useState } from 'react';
import Task from './Task';

function Todo() {
    const [data, setData] = useState([]);
    const [val, setVal] = useState("");

        function dleteItem(id){
           setData(data.filter((item, ind) => ind !==id));
        }
        function updateTheItem(item, id){
            setData(data.map((val, ind)=>{
                return ind===id?item:val
            }))
        }
    
  return (
    <div>
        <input onChange={(e)=>setVal(e.target.value)} type="text" placeholder='enter task' value={val}></input>
        <button onClick={()=>{
            setData((item) => [...item, val],
            setVal(""));
        }}>Add</button>

        {data.map((item, ind) => <Task key={ind} item={item} id={ind} hadleDelte = {dleteItem} updateItem={updateTheItem} />)}
    </div>
  )
}

export default Todo
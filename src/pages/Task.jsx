import React from 'react'

function Task({item, id,hadleDelte,updateItem}) {
    function handleDelte(){
        hadleDelte(id);
    }
    function handleUpdatae(){
        const newVal = prompt("enter the new Value");

        updateItem(newVal, id);
    }
  return (
    <div>
        <p>{item}</p>
        <button onClick={handleDelte}> Delete</button>
        <button onClick={handleUpdatae}> Edit</button>
    </div>
  )
}

export default Task
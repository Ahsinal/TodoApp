import React, { useState } from 'react'

const TodoInput = (props) => {
    const[inputText,setInputText]=useState('');
    const handleEnterPress=(e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText('')
        }
    }
  return (
    <div>
        <div className='input-container'>
            <input type="text"
            placeholder='Enter your to-do' 
            className='input-box-todo'
            value={inputText}
            onChange={e=>{
                setInputText(e.target.value)
            }}/>
            <button onClick={()=>{
                props.addList(inputText)
                setInputText("")
            }} 
            onKeyDown={handleEnterPress}
            className='add-btn' >+</button>

           
        </div>
    </div>
  )
}

export default TodoInput
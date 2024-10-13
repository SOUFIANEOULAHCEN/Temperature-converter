import {useState} from 'react'

export default function ColorPicker() {
    const [ Color , setColor ]=useState("#FFFFFF");
    const ChangeColor = (event)=>{
        setColor(event.target.value);
    }
    
    // const Divstyle = {Color}+' w-[300px] h-[300px] border border-gray-400 rounded-2xl flex items-center justify-center';
    // const Divstyle = `bg-[${Color}] w-[300px] h-[300px] border border-gray-400 rounded-2xl flex items-center justify-center`;
    const Divstyle = {
        backgroundColor: Color, 
        width: '300px',
        height: '300px',
        border: '1px solid gray',
        borderRadius: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition :'0.25s ease'
    }
    return (
    <div className='flex flex-col items-center justify-center w-[50%] bg-gray-50 h-auto rounded-2xl p-4'>
      <div style={Divstyle}  >
        <h3>The color Selected is :{Color}</h3>
      </div>
      <input type="color" value={Color} className='w-full rounded-2xl mt-4' onChange={ChangeColor} />
    </div>
  )
}





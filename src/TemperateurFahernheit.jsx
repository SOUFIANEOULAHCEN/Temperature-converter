import {useState} from 'react'

export default function TemperateurFahernheit() {
    const [TempF , setTempF]=useState(90);
    const handelTempF = (e)=>{
        setTempF(e.target.value)
    }

    let res = (TempF -32)*5/9;
    const unitStatus = res>=100 ? "The water is boiling" : "Water does not boil" ;
    const TempStyle = res>=100 ? 'text-red-700 font-bold' : 'text-green-700 font-bold' ;
  return (
    <div className='w-[80%] border  rounded-2xl mt-3 flex flex-col items-center justify-center gap-4 bg-gray-50 px-10 py-6' >
      <h1 className='text-2xl font-bold'>Enter the Temperature in fahrenheit :</h1>
      <input type="text" value={TempF} onChange={handelTempF} className='border border-gray-700 w-full rounded-3xl px-6 py-2' />
      <h3 className='text-xl'>{unitStatus} <span className={TempStyle} >{res} °C : {TempF} °F </span> </h3>
    </div>
  )
}

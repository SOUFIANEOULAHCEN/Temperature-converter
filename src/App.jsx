// import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import './App.css'
import ColorPicker from './ColorPicker'
import ConvertTemp from './ConvertTemp'
import TemperateurFahernheit from './TemperateurFahernheit'
import TemperatureCelsuis from './TemperatureCelsuis'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='h-auto w-full bg-gray-200 p-[10%] flex flex-col items-center justify-center gap-3'>
      <h1 className='text-3xl font-bold bg-yellow-500 text-gray-100 px-24 rounded-2xl py-4'>Converter Temperateur</h1>
      <TemperatureCelsuis  />
      <TemperateurFahernheit />
      <ConvertTemp />
      <h1 className='text-3xl font-bold bg-yellow-500 text-gray-100 px-24 rounded-2xl py-4'>Color Picker</h1>
      <ColorPicker />
    </div>
  )
}

export default App

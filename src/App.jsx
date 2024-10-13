// import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import './App.css'
import ConvertTemp from './ConvertTemp'
import TemperateurFahernheit from './TemperateurFahernheit'
import TemperatureCelsuis from './TemperatureCelsuis'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-full bg-gray-200 p-[10%] flex flex-col items-center justify-center gap-3'>
      <TemperatureCelsuis  />
      <TemperateurFahernheit />
      <ConvertTemp />
    </div>
  )
}

export default App

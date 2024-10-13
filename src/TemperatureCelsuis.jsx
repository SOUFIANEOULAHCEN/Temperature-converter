import { useState } from "react";

export default function TemperatureCelsuis() {
  const [tempC, setTempC] = useState(100);
  const res = (tempC *9/5)+32 ;
  const TempStyle = tempC>=100 ? "text-red-700 font-bold" : "text-green-700 font-bold"
  const unitStatus = tempC>=100 ? "The water is boiling" : "Water does not boil";
  return (
    <div className="bg-gray-50 px-10 py-6 w-[80%] border rounded-2xl flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Enter The temperature in Celsius:</h1>

      <input type="text" className="border border-gray-500 px-3 py-2 rounded-3xl w-full" value={tempC} onChange={(e)=>{setTempC(e.target.value)}} />

      {/* <h3 className="text-xl">Leau bout : <span className="text-green-800 font-bold text-2xl"> {res} </span></h3> */}
      <h3 className="text-xl">{unitStatus} <span className={TempStyle} >{tempC} °C : {res} °F</span></h3>
    </div>
  );
}

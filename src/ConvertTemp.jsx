import { useState } from "react";

export default function ConvertTemp() {
  const [Degree, setDegree] = useState(100);
  const [unitDegree , setunitDegree] = useState('c');
  const[ResultConverture , setResultConverture] = useState(0)
  const [ConvertBtn , setConvertBtn]=useState('convert')

  let restoF =( Degree *9/5 ) +32;
  let restoC = (Degree -32)*5/9 ;

  const ChangeUnitDegree = (e)=>{
    setunitDegree(e.target.value)
  }
  const ConvertTempFunction = (e) => {
    e.preventDefault();
    unitDegree === 'c' ? setResultConverture((restoF).toFixed(2)) 
                       : setResultConverture((restoC).toFixed(2)) ;
    // setResultConverture(resF);
    unitDegree === 'c' ? setConvertBtn('Convert to Celsuis') : setConvertBtn('Convert to Fahernheit')
  };
  return (
    <div className="w-[80%] h-auto px-[5%] py-10 bg-gray-50 text-center rounded-3xl">
      <h1 className="text-2xl font-bold">Temperature converter</h1>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[1fr_1fr] gap-3">
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="Degree" className="text-xl mb-1">
              Degree
            </label>
            <input
              onChange={ (e)=>{ setDegree(e.target.value) } }
              value={Degree}
              type="text"
              className="w-full border border-gray-600 bg-transparent rounded-2xl px-4 py-1 "
            />
          </div>
          <div className="flex flex-col items-center justify-center ">
            <label htmlFor="type" className="text-xl mb-1">
              Type
            </label>
            <select
              name=""
              id="type"
              className="w-full px-6 py-2 rounded-xl bg-gray-200"
              onChange={ChangeUnitDegree}
            >
              <option value="c">Celsuis</option>
              <option value="f">Fahernheit</option>
            </select>
          </div>
        </div>
        <div>
          <input
            value={ResultConverture}
            type="text"
            className="w-full bg-transparent border border-gray-600 rounded-3xl px-6 py-2"
          />
        </div>
        <input
          type="submit"
          onClick={ConvertTempFunction}
          value={ConvertBtn}
          className="bg-blue-700 py-2 text-gray-100 text-xl rounded-3xl"
        />
      </div>
    </div>
  );
}

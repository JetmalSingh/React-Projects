import { useCallback, useState, useEffect, useRef } from "react"
function App() {
  const len = 11
  const [jazz , setJazz] = useState(true)
  const [telenor , setTelenor] = useState(false)
  const [zong , setZong] = useState(false)
  const [ufone , setUfone] = useState(false)
  const [number, setNumber] = useState("")

  //useRef hook
  const numRef = useRef(null)
  const numGenerator = useCallback(()=>{
    let num = "03"
    let str = "0123456789"
    if(jazz){
      num+='2'
    }else if(telenor){
      num += "4"
    }else if(zong){
      num+='1'
    }else if (ufone){
      num+="3"
    }
    // generate remaining digits (total length = 11)
  for (let i = num.length; i < len; i++) {
    let char = Math.floor(Math.random() * str.length)
    num += str.charAt(char)
  }
  setNumber(num)
  }, [len, telenor, jazz, zong, ufone, setNumber])

  const copyNumberToClipboard = useCallback(() => {
    numRef.current?.select();
    numRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(number)
  }, [number])
  useEffect(()=>{
    numGenerator()
  }, [len, jazz, telenor, zong, ufone, numGenerator])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-white text-orange-500">
      <h1 className='text-black text-center my-3'>Number Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={number}
            className="outline-none w-full py-1 px-3 bg-neutral-100"
            placeholder="03442802907"
            readOnly 
            ref={numRef}
        />
        <button
        onClick={copyNumberToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-10 ml-10'>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          id="numberInput"
          checked={jazz}
          onChange={() => {
            setJazz(true)
            setTelenor(false)
            setZong(false)
            setUfone(false)
          }}
      />
      <label htmlFor="numberInput">Jazz</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              id="characterInput"
              checked={telenor}
              onChange={() => {
                setJazz(false)
                setTelenor(true)
                setZong(false)
                setUfone(false)
              }}
          />
          <label htmlFor="characterInput">telenor</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              id="characterInput"
              checked={zong}
              onChange={() => {
                setJazz(false)
                setTelenor(false)
                setZong(true)
                setUfone(false)
              }}
          />
          <label htmlFor="characterInput">Zong</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              id="characterInput"
              checked={ufone}
              onChange={() => {
                setJazz(false)
                setTelenor(false)
                setZong(false)
                setUfone(true)
              }}
          />
          <label htmlFor="characterInput">Ufone</label>
      </div>
    </div>
</div>

    </>
  )
}

export default App

import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charsAllowed, setCharsAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(chars.length);
    
    if (numberAllowed) chars += "0123456789";
    console.log(chars.length);
    
    if (charsAllowed) chars += "!@#$%^&*()_+";
    console.log(chars.length);  

    for(let i = 0; i<length;i++){
      console.log(chars.length);     
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(pass);

  }, [length, numberAllowed, charsAllowed, setPassword])

  const copytoClipboard = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password)
    setCopied(true) //set copied to true
    setTimeout(() => setCopied(false), 2000); // Hide after 2 sec
  },[password])

  useEffect(()=>{passwordGenerator()},[length, numberAllowed, charsAllowed])
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-10 py-4 space-y-4 text-gray-800 bg-gray-700 '>
      <h1 className='text-white text-center py-2 text-2xl'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden m-4 bg-gray-100'><input type="text" value={password} className='outline-none w-full py-2 px-3 ' placeholder='password' readOnly ref={passwordRef}/>
        <button onClick={copytoClipboard} className='outline-none bg-blue-700 text-white px-3 cursor-pointer'>{copied ? "Copied!" : "Copy"}</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={8} max={20} value={length} className='cursor-pointer mx-3 accent-orange-400'onChange={(e)=>{setlength(e.target.value)}} />
          <label className='text-orange-300'>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox" id='numberInput' checked={numberAllowed} onChange={(e)=>{setNumberAllowed((prev)=>!prev)}} />
          <label htmlFor='numberInput' className='text-orange-300'>Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox" id='charsInput' checked={charsAllowed} onChange={(e)=>{setCharsAllowed((prev)=>!prev)}
          } /> 
          {/* (e) => { ... } → Event handler function triggered on change.
          setCharsAllowed(...) → Updates the charsAllowed state. */}
          {/* (prev) => !prev → Uses the previous state (prev) and negates it (!prev), flipping between true and false. */}
          <label htmlFor='charsInput' className='text-orange-300'>Special Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App

import { useState , useCallback , useEffect  , useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllow , setnumberAllow] = useState(false)
  const [characterAllowed , setcharacterAllowed] = useState(false)

  const [Password , setpassword] = useState("")

  //Using UseRef hook

  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback(


    ()=>{
      let pass=""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllow) str += "0123456789"
      if(characterAllowed) str += "[]{}?/@#$%^&*!~"

      for (let i = 1; i <= length; i++) {
       const char = Math.floor(Math.random()*str.length+1)
        pass += str.charAt(char)
      }

      setpassword(pass)

    }
    , [length , numberAllow , characterAllowed , setpassword])

    const copyPasswordToclipBoard = useCallback(()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(Password)
    } ,[Password])

    useEffect(()=>{
    
      PasswordGenerator()
    },[length,numberAllow,characterAllowed,PasswordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 p-3'>
      <h1 className='text-white text-center mt-10 mb-4 my-3'>Password Genetator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={Password}
        className='outline-none w-full py-1 px-3 '
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToclipBoard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

      </div>

      <div className=' flex text-sm gap-x-2'>
        <div className='flex text-center gap-x-1'>

          <input 
          type="range"
          min = {6}
          max = {100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />

          <label >Lenght: {length}</label>

        </div>
        <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllow}
            id='number input'
             className='cursor-pointer'
            onChange={()=>{
              setnumberAllow((pev)=>!pev)
            }}
            />
            <label >Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllow}
            id='number input'
            className='cursor-pointer'

            onChange={()=>{
              setnumberAllow((pev)=>!pev)
            }}
            />
            <label >Character</label>
        </div>
      </div>

    </div>
    </>
  )
}

export default App

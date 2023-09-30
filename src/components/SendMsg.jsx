import { useState } from "react"


const SendMsg = () => {

    const [value, setValue] = useState('')
    console.log(value);
    const handleForm = (e) => {
      e.preventDefault()
      console.log('hello');
      setValue('')
    }
    return (
        <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg ">
            <form onSubmit={handleForm} className="containerWrap flex px-3">
                <input value={value} onChange={e => setValue(e.target.value)}  type="text" name="msg" id="msg" className="input w-full focus:outline-none bg-gray-100 rounded-r-none"/>
                <button className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm" type="submit" >Send</button>
            </form>
        </div>
    )
}

export default SendMsg
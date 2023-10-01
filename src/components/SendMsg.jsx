import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../auth/firebase";

const SendMsg = () => {

    const [value, setValue] = useState('')
    const { currentUser } = useAuthContext()

    const hadnleSendMessage = async (e) => {

        e.preventDefault()

        if(value.trim() === ''){
            alert('Enter valid message!')
            return
        }

        try {
            const { uid, displayName, photoURL } = currentUser
            await addDoc(collection(db, "messages"),{
                text:value,
                name:displayName,
                avatar: photoURL,
                createdAt:serverTimestamp(),
                uid
            })
        } catch (error) {
            console.log(error);
        }
        setValue('')
    }
    return (
        <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg ">
            <form onSubmit={hadnleSendMessage} className="containerWrap flex px-3">
                <input value={value} onChange={e => setValue(e.target.value)} type="text" name="msg" id="msg" className="input w-full focus:outline-none bg-gray-100 rounded-r-none" />
                <button className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm" type="submit" >Send</button>
            </form>
        </div>
    )
}

export default SendMsg
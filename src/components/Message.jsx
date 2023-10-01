/* eslint-disable react/prop-types */

import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Message = ({ message }) => {
    const { currentUser } = useAuthContext()
    const [timeDifference, setTimeDifference] = useState(null);

    useEffect(() => {
        const currentTimeInSeconds = Math.floor(Date.now() / 1000);
        const messageTimeInSeconds = message?.createdAt?.seconds;
        const differenceInSeconds = currentTimeInSeconds - messageTimeInSeconds;
    
        // Calculate time difference in minutes and hours
        const minutesDifference = Math.floor(differenceInSeconds / 60);
        const hoursDifference = Math.floor(minutesDifference / 60);
    
        // Set the time difference in minutes or hours in the state based on the elapsed time
        if (minutesDifference <= 60) {
          setTimeDifference(minutesDifference + " mn"  + " ago");
        } else {
          setTimeDifference(hoursDifference + " hr" + (hoursDifference !== 1 ? "s" : "") + " ago");
        }
    }, [message?.createdAt?.seconds]);


    return (
        <div>
            <div className={` chat mb-4 ${message?.uid === currentUser?.uid ? "chat-end" : "chat-start"}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={message?.avatar} referrerPolicy="no-referrer" />
                    </div>
                </div>
                <div className="chat-header">
                    {message?.name}

                </div>

                <div className="chat-bubble relative overflow-visible">{message?.text}
                <time className="text-xs opacity-50 text-gray-500 absolute bottom-[-15px] left-0">
                {timeDifference !== null ? timeDifference : ''}
                </time>
                </div>
              
            </div>

        </div>
    )
}

export default Message
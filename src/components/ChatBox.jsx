import Message from "./Message"

const ChatBox = () => {

  const messages = [
    {
      id: 1,
      text: 'hello',
      name:'Ali'
    },
    {
      id: 2,
      text: 'hi',
      name:'Maral'

    }
  ]

  return (
    <div className="pb-44 pt-20 containerWrap">
      {
        messages.map(message=><Message message={message} key={message.id}/>)
      }
    </div>
  )
}

export default ChatBox
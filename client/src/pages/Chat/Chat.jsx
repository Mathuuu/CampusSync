import React, { useEffect } from 'react';
import "./Chat.css";
import LogoSearch from '../../components/LogoSearch/LogoSearch';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { userChats } from "../../server/Controllers/ChatController"
import Conversation from '../../components/Conversation/Conversation';
const Chat = () => {

  const { user } = useSelector((state) => state.authReducer.authData);  
  const [chats, setChats] = useState([])

  useEffect(() => {
    const getChats = async () => {
      try {
        console.log(user)
        console.log(user._id)
        const { data } = await userChats(user._id);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user]);
  
  return (
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
      <LogoSearch/>
      <div className='Chat-container'>
      <h2>Chats</h2>
      <div className="Chat-list">
        Conversation
      </div>
      </div>
    </div>
       

      {/* Right Side */}
      <div className="Right-side-chat">
              Right Side
      </div>
    </div>
  )
}

export default Chat
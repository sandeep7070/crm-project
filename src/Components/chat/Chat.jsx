import React, { useState, useRef, useEffect } from 'react';
import { Card, Button, CardContent, Input}  from '@mui/material'
import { SendHorizontal } from 'lucide-react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey there! 👋", sender: "bot" },
    { id: 2, text: "How can I help you today?", sender: "bot" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Add user message
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: newMessage,
        sender: "user"
      }]);
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: "Sandeep Devloper",
          avtar: 'HLO.PNG',
          sender: "bot"
        }]);
      }, 2000);
      
      setNewMessage("");
    }
  };

  return (
    <Card className="w-full bg-[#182638] max-w-2xl mx-auto min-w-full h-[600px] flex flex-col">
      {/* Chat Messages Area */}
      <CardContent className="flex-1 bg-[#182638] w-full overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`
                max-w-[80%] p-3 rounded-lg
                ${message.sender === 'user' 
                  ? 'bg-blue-500 text-white rounded-br-none' 
                  : 'bg-gray-100 text-gray-900 rounded-bl-none'}
                animate-in fade-in slide-in-from-bottom-2 duration-300
              `}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </CardContent>

      {/* Message Input Area */}
      <CardContent className="border-t p-4">
        <form onSubmit={handleSend} className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <SendHorizontal className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ChatInterface;
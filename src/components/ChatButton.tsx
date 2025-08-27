import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
const ChatButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => {
    // In a real implementation, this would open a chat widget
    alert('Chat feature would open here! This demonstrates UREKA\'s chatbot integration capabilities.');
  };
  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 z-50 hidden"
    >
      <MessageCircle className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
    </button>
  );
};
export default ChatButton;
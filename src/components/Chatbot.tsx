import React, { useState, lazy, Suspense } from 'react';

const ChatBot = lazy(() => import('react-simple-chatbot'));

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleChat}
        aria-label="Open chat support"
        aria-expanded={isOpen}
        className="fixed bottom-5 right-5 bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-lg hover:bg-green-700 transition-colors duration-300"
      >
        {isOpen ? '×' : '?'}
      </button>
      {isOpen && (
        <div className="fixed bottom-24 right-5 z-50">
          <Suspense fallback={<div>Loading...</div>}>
            <ChatBot
              steps={[
                {
                  id: '0',
                  message: 'Welcome to Jax Sod! How can I help you today?',
                  trigger: '1',
                },
                {
                  id: '1',
                  options: [
                    { value: 1, label: 'Sod Types', trigger: '2' },
                    { value: 2, label: 'Installation Process', trigger: '3' },
                    { value: 3, label: 'Get a Quote', trigger: '4' },
                    { value: 4, label: 'Speak to a Human', trigger: '5' },
                  ],
                },
                {
                  id: '2',
                  message: 'We offer various sod types including St. Augustine Floratam, Shade-Tolerant St. Augustine, Zoysia, Bermuda, and Bahia. Each type has its own benefits and ideal conditions. Would you like more information on a specific type?',
                  trigger: '1',
                },
                {
                  id: '3',
                  message: 'Our installation process involves removing old grass, preparing the soil, and carefully laying new sod. We ensure proper care instructions are provided after installation. Would you like to know more about a specific step?',
                  trigger: '1',
                },
                {
                  id: '4',
                  message: 'To get an accurate quote, we\'ll need to know the size of your lawn and the type of sod you\'re interested in. You can use our Lawn Calculator tool on our website, or contact us directly for a personalized quote.',
                  trigger: '1',
                },
                {
                  id: '5',
                  message: 'Certainly! You can reach us at 904-901-1457 or visit our Contact page to send us a message. We\'ll get back to you as soon as possible.',
                  trigger: '1',
                },
              ]}
              headerTitle="Jax Sod Assistant"
              botAvatar="/logo.jpg"
              floating={true}
            />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default Chatbot;

const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return <div className="chat-error">Chat temporarily unavailable. Please try again later.</div>;
  }
  return children;
};

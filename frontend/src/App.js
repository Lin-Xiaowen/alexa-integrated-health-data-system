import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const socket = new WebSocket(process.env.BACKEND_WEBSOCKET_URL); // WebSocket server URL
    socket.onopen = () => {
      console.log('WebSocket connected');
      socket.send('Hello from React');
    };
    socket.onmessage = (event) => {
      setMessage(event.data);
    };
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="App">
      <h1>WebSocket Example</h1>
      <p>Message from server: {message}</p>
    </div>
  );
}

export default App;
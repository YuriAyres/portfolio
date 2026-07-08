import { useState } from 'react';

function App() {
  const [currentScreen, setCurrentScreen] = useState('intro');

  return (
    <main>
      {currentScreen === 'intro' && (
        <div>
          Intro Screen
        </div>
      )}

      {currentScreen === 'loading' && (
        <div>
          Loading Animation
        </div>
      )}

      {currentScreen === 'portfolio' && (
        <div>
          Portfolio
        </div>
      )}
    </main>
  );
}

export default App;
import { createContext, useState } from 'react';
import Home from './Components/Home/Home';
import './sass/App.scss';
export const progressContext = createContext();

function App() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  
  return (
    <progressContext.Provider value={[activeQuestion, setActiveQuestion]}>
      <div className="app">
        <Home></Home>
      </div>
    </progressContext.Provider>
  );
}

export default App;

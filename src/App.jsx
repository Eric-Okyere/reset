import { Route, Routes } from 'react-router-dom';
import Resetpass from './Resetpass';
import Home from './Home';

function App() {
 

  return (
    <>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/user/:id" element={<Resetpass />} />
     </Routes>

    </>
  )
}

export default App

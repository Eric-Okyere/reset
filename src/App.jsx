import { Route, Routes } from 'react-router-dom';
import Resetpass from './Resetpass';

function App() {
 

  return (
    <>
     <Routes>
     <Route path="/user/id" element={<Resetpass />} />
     </Routes>
{/*   
       <h1>hi</h1> */}
    </>
  )
}

export default App

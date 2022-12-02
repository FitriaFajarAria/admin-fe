import { Routes, Route } from 'react-router-dom'
import AdminArtikel from './components/AdminArtikel'
import AdminUser from './components/AdminUser'
import Navbar from './components/Navbar'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/article' element={<AdminArtikel/>}/>
        <Route path='/user' element={<AdminUser/>}/>
      </Routes>
    </div>
  )
}

export default App



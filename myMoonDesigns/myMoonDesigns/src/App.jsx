import './App.css'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import MainPage from './pages/MainPage'
import Gallery from './pages/Gallery'

function App() {
    return (
      <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>

      </>
    );
}
export default App

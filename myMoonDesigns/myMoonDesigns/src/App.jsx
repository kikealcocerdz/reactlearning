import './App.css'
import './index.css'
import NavBar from '../components/NavBar'
import MainPage from './pages/MainPage'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import {SocialButton} from '../components/SocialButton.jsx'

function App() {
    return (
      <main>
      <NavBar />
      <MainPage />
      <Gallery />
      <Contact />
      <footer className='social'>
        <SocialButton />
      </footer>
      </main>
    );
}
export default App

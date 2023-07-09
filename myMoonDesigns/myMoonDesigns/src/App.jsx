import { Products } from '../components/Products.jsx';
import { SocialButton } from '../components/SocialButton';
import { FollowMouse } from '../components/FollowMouse';
import { products } from '../media/products.json';
import './App.css'
import './index.css'

function App() {
  console.log(products)
    return (
      <div>
      <header className='extremoduro'>
      <FollowMouse />
        <nav>
        <img src="..\media\logo.jpeg" alt="MyMoon Customs" />
          <h1>MyMoon Customs</h1>
        </nav>
      </header>

      <main>
        <section className='portfolio'>
          <div className='portfolio-gallery'>
            <img src="../media/aida1.jpg" alt="aida1" className='portfolio-item'/>
            <img src="../media/aida2.jpg" alt="aida1" className='portfolio-item'/>
            <img src="../media/aida3.jpg" alt="aida1" className='portfolio-item'/>
          </div>
        </section>
        <section className='center'>
        <button className='button'>
        <span className="transition"></span>
        <span className="gradient"></span>
        <span className="label">Nuestros trabajos</span>
        </button>
        </section>
      </main>

      <footer className='social'>
        <SocialButton />
      </footer>
    </div>
  );
}
export default App

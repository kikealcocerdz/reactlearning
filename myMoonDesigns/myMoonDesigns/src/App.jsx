import { Products } from '../components/Products.jsx';
import { SocialButton } from '../components/SocialButton';
import { products } from '../media/products.json';
import './App.css'
import './index.css'

function App() {
  console.log(products)
    return (
      <div>
      <header>
        <nav>
          <img src="..\media\logo.jpeg" alt="MyMoon Customs" />
          <h1>MyMoon Customs</h1>
        </nav>
      </header>

      <main>
        <section className='section'>
        <h2>Clothing</h2>
          <ul>
        <li>🌘Personalizamos prendas denim y zapatillas</li>
        <li>🌗Pedidos MD</li>
        <li>🌖Envíos a España</li>
        </ul>
        </section>

        <section id="portfolio" className="portfolio-section">
          <Products products={products} />
        </section>

        <section id="contact">
          {/* Aquí puedes agregar un formulario de contacto para que los visitantes se pongan en contacto contigo */}
        </section>
      </main>

      <footer className='social'>
        <SocialButton />
      </footer>
    </div>
  );
}
export default App

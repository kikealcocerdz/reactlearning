import { Products } from '../components/Products.jsx';
import { SocialButton } from '../components/SocialButton';
import { FollowMouse } from '../components/FollowMouse';
import { products } from '../media/products.json';
import { AboutImage } from '../components/AboutImage';
import './App.css'
import './index.css'
import { MyButton } from '../components/MyButton.jsx';

function App() {
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
      <h2 className='center'>El proyecto MyMoon</h2>
        <section className='portfolio'>
          <div className='portfolio-gallery'>
            <AboutImage imageId={'../media/aida1.jpg'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
            <AboutImage imageId={'../media/aida2.jpg'} message={"Nos llamamos Aida y Flor, y llevamos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
            <AboutImage imageId={'../media/aida3.jpg'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
          </div>
        </section>
        <section className='center'>
          <MyButton text={"Nuestro trabajos"}/>
          <MyButton text={"Hazte con la tuya"}/>
        </section>
      </main>

      <footer className='social'>
        <SocialButton />
      </footer>
    </div>
  );
}
export default App

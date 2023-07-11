import { AboutImage } from '../../components/AboutImage.jsx';
import { SocialButton } from '../../components/SocialButton.jsx';
import { FollowMouse } from '../../components/FollowMouse.jsx';
import '../App.css'
import '../index.css'
import { MyButton } from '../../components/MyButton.jsx';

export function MainPage() {
    return (
      <div name='home' className='main'>
      <header className='extremoduro'>
        <nav>
        <img src="..\media\logo.jpeg" alt="MyMoon Customs" />
        <MyButton text={'About us'} reference={'home'}/>
        <MyButton text={"Nuestro trabajos"} reference={'gallery'}/>
        <MyButton text={"Hazte con la tuya"} reference={'contact'}/>
        </nav>
      </header>

      <main>
      <h2>MyMoon</h2>
        <section className='portfolio'>
          <div className='portfolio-gallery'>
            <AboutImage imageId={'../media/aida1.jpg'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
            <AboutImage imageId={'../media/aida2.jpg'} message={"Nos llamamos Aida y Flor, y llevamos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
            <AboutImage imageId={'../media/aida3.jpg'} message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
          </div>
        </section>
        <section className='center'>
        </section>
      </main>
    </div>
  );
}
export default MainPage

import './App.css'
import Yourluck from './components/YourLuck'
import phrases from './data/phrases.json'
import { useState } from 'react'
import fondo1 from './assets/fortuna/fondo1.jpg'
import fondo2 from './assets/fortuna/fondo2.jpg'
import fondo3 from './assets/fortuna/fondo3.jpg'
import fondo4 from './assets/fortuna/fondo4.jpg'

function App() {
  const[index,setindex] = useState(0)

  const [backgroundImage, setBackgroundImage] = useState(fondo1);
  

  
  const changeLuck = () =>{
  
    const Otherluck=Math.floor(Math.random()*phrases.length);
    setindex(Otherluck)

    setBackgroundImage(choiceRandomImage());
  }

  const choiceRandomImage = () => {
    const images = [fondo1, fondo2, fondo3, fondo4];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  document.body.style.backgroundImage = `url(${backgroundImage})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundSize = 'no-repeat';


  return (
  <>
    <section className='container'>
      <h1>GALLETAS DE LA FORTUNA</h1>
      <section className='infos'>
        <Yourluck
          data= {phrases[index]}
        />
      </section>
    </section>

    <section className='container'>
      <button onClick={changeLuck}>🤞 obten tu fortuna</button>
    </section>
    
  </>
  )
}

export default App
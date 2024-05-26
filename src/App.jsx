import { useState } from 'react';
import './App.css';
import ShowButton from './components/ShowButton';
import ShowPhrase from './components/ShowPhrase';
import randomArr from './services/randomArr';
import arr from './utils/phrases.json';
import imagesArr from './utils/images.json';

function App() {
  const initialQuote = randomArr(arr); 
  const [randomPhrase, setRandomPhrase] = useState(initialQuote);
  const initialPhoto = randomArr(imagesArr);
  const [image, setImage] = useState(initialPhoto);

  const appStyles = {
    backgroundImage: `url(/assets/fortunas-2/${image}.png)`,
  };

  return (
    <div className='app' style={appStyles}>
      <h1 className='app__title'>Galletas de la fortuna</h1>
      <ShowButton 
        setRandomPhrase={setRandomPhrase}
        setImage={setImage}
      />
      <ShowPhrase randomPhrase={randomPhrase} />
    </div>
  );
}

export default App;

//https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png
import { useState } from 'react';
import Header from '../components/Header';

const Pokemons = () => {
  const [query, setQuery] = useState('')
  return (
  <>
   <Header query={query} setQuery={setQuery}/>
    <main>
    <h1>Pokemons</h1>
    </main>
    <footer>
        Pokes by DaisyDew
    </footer>
  </>
  )
};

export default Pokemons;

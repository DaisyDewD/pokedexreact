//https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png
import { useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';

const Pokemons = () => {
  const [query, setQuery] = useState('')
  return (
  <>
   <Header query={query} setQuery={setQuery}/>
    <Menu/>
    <main>
    <h1>Pokemons</h1>
    </main>
  </>
  )
};

export default Pokemons;

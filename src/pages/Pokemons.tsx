//https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png
import { useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';
import styles from './pokemons.module.css';

import bulbasaurPicture from '../assets/bulbasaur.gif';

const Pokemons = () => {
  const [query, setQuery] = useState('')
  return (
  <>
   <Header query={query} setQuery={setQuery}/>
    <Menu/>
    <main>
    <nav>
      <Link to= "/">
       < img src ={bulbasaurPicture} alt="Bulbasaur" />
<div>
  <span>Bulbasaur</span>
  <span>#001</span>
</div>
          </Link>
    </nav>
    </main>
  </>
  )
};

export default Pokemons;

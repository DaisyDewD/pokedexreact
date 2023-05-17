//https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';
import styles from './pokemons.module.css';
import bulbasaurPicture from '../assets/bulbasaur.gif';
import { fetchPokemons } from '../api/fetchPokemons';



const Pokemons = () => {
  const [query, setQuery] = useState('')
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchAllPokemons = async () => {
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
    };
    fetchAllPokemons();
  }, []);

  return (
  <>
   <Header query={query} setQuery={setQuery}/>
    <Menu/>
    <main>
    <nav>
      {/* {pokemons.slice(0,151).map((pokemon) => { */}

      <Link className={styles.listItem} to= "/">
       < img className={styles.listItemIcon}src ={bulbasaurPicture} alt="Bulbasaur" />
<div className={styles.listItemText}>
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

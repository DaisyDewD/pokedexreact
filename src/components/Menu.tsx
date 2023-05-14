import { Link } from "react-router-dom";
import PokemonsButton from "../assets/pikachu.png";
import ItemsButton from "../assets/pokeball.png";
import LocationButton from "../assets/pointer.png";
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <menu className={styles.menu}>
      <Link to="/pokemons" className={styles.menuLink}>
        <img src={PokemonsButton} alt="PokemonsButton" className={styles.menuIcon}/>
        Pokemons
      </Link>

      <Link to="/location" className={styles.menuLink}>
        <img src={LocationButton} alt="LocationButton" className={styles.menuIcon}/>
        Location
      </Link>
      <Link to="/items" className={styles.menuLink}>
        <img src={ItemsButton} alt="ItemsButton"className={styles.menuIcon} />
        Items
      </Link>
    </menu>
  );
};

export default Menu;

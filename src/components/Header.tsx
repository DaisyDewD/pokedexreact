import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <input type="text" placeholder="Search a Pokémon" />
        </header>
    );
    };

export default Header;

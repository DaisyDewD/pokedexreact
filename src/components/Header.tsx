import styles from "./Header.module.css";

type headerProps = {
  query: string;
  setQuery: (query: string) => void;
};

const Header = ({ query, setQuery }: headerProps) => {
  return (
    <header className={styles.header}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search a Pokémon"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </header>
  );
};

export default Header;

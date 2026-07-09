import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#about">Sobre</a>

        <a href="#skills">Tecnologias</a>

        <a href="#projects">Projetos</a>

        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}

export default Navbar;
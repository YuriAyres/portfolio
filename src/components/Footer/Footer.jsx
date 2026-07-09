import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        © {currentYear} Yuri Ayres. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
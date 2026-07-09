import styles from './Hero.module.css';
import Container from '../../components/Container/Container';

function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <span className={styles.tag}>
          Olá, eu sou
        </span>

        <h1 className={styles.title}>
          Yuri Ayres
        </h1>

        <h2 className={styles.subtitle}>
          Desenvolvedor Full Stack
        </h2>

        <p className={styles.description}>
          Desenvolvendo aplicações web modernas,
          sistemas de gestão e soluções com tecnologia.
        </p>
      </Container>
    </section>
  );
}

export default Hero;
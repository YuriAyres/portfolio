import styles from './IntroScreen.module.css';

function IntroScreen({ onEnter }) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Yuri Ayres de Paula
        </h1>

        <p className={styles.subtitle}>
          Desenvolvedor Full Stack
        </p>

        <button
          className={styles.button}
          onClick={onEnter}
        >
          Entrar
        </button>
      </div>
    </section>
  );
}

export default IntroScreen;
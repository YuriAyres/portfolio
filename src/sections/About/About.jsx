import Container from '../../components/Container/Container';
import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Sobre Mim
          </h2>

          <p className={styles.text}>
            Sou estudante de Ciência da Computação e desenvolvedor focado na
            criação de aplicações web modernas, sistemas de gestão e soluções
            que unem tecnologia e usabilidade.
          </p>

          <p className={styles.text}>
            Tenho experiência com desenvolvimento frontend e backend utilizando
            tecnologias como React, JavaScript, Flask, Python, Supabase e SQL.
          </p>

          <p className={styles.text}>
            Atualmente busco aprimorar minhas habilidades em arquitetura de
            software, desenvolvimento full stack e soluções escaláveis.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;
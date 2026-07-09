import Container from '../../components/Container/Container';
import styles from './Contact.module.css';
import { socialLinks } from '../../data/socialLinks';

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Contato
          </h2>

          <p className={styles.description}>
            Estou sempre aberto para conversar sobre projetos,
            oportunidades e tecnologia.
          </p>

          <div className={styles.links}>
            <a
              href={socialLinks.email}
              className={styles.link}
            >
              Email
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
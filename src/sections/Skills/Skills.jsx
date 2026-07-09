import Container from '../../components/Container/Container';
import { skills } from '../../data/skills';

import styles from './Skills.module.css';

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <Container>
        <h2 className={styles.title}>
          Tecnologias
        </h2>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill} className={styles.card}>
              {skill}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
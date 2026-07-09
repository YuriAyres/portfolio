import Container from '../../components/Container/Container';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

import styles from './Projects.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <Container>
        <h2 className={styles.title}>
          Projetos
        </h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
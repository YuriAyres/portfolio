import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>
        {project.title}
      </h3>

      <p className={styles.description}>
        {project.description}
      </p>

      <div className={styles.techList}>
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className={styles.tech}
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.github || project.demo) && (
        <div className={styles.actions}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
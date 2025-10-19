import projectData from "../projectData"
import styles from "./ProjectCards.module.css"

function ProjectCards() {
    return(
        <>
            {projectData.map((project) => (
                <div className={styles.project}>
                    <div>
                        <button className={styles.projectButton}>Click to go to the project</button>
                    </div>
                    <div className={styles.projectText}>
                        <h4 className={styles.projectTitle}>{project.title}</h4>
                        <div>{project.description}</div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProjectCards
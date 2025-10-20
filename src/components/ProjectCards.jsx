import styles from "./ProjectCards.module.css"

function ProjectCards({data}) {

    return(
        <>
            {data.map((project, index) => (
                <div className={styles.project} key={index}>
                    <div>
                        <a href={project.link} target="_blank"><button className={styles.projectButton}>Click to go to the project</button></a>
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
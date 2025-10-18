import SearchProject from "./SearchProject"
import ProjectCards from "./ProjectCards"
import styles from "./ProjectDisplay.module.css"

function ProjectDisplay() {
    return(
        <div className={styles.ProjectDisplay}>
            <SearchProject/>
            <ProjectCards/>
        </div>
    )
}

export default ProjectDisplay
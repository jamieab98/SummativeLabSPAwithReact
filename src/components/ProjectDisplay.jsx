import SearchProject from "./SearchProject"
import ProjectCards from "./ProjectCards"
import styles from "./ProjectDisplay.module.css"

function ProjectDisplay({data}) {
    return(
        <div className={styles.ProjectDisplay}>
            <SearchProject/>
            <ProjectCards data={data}/>
        </div>
    )
}

export default ProjectDisplay
import NewProject from "./NewProject"
import ProjectDisplay from "./ProjectDisplay"
import styles from './Body.module.css'

function Body() {
    return(
        <div className={styles.body}>
            <NewProject/>
            <ProjectDisplay/>
        </div>
    )
}

export default Body
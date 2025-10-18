import styles from "./SearchProject.module.css"

function SearchProject() {
    return(
        <div className={styles.SearchProject}>
            <form>
                <input type="text" placeholder="Search Projects" className={styles.projectsearch}></input>
            </form>
        </div>
    )
}

export default SearchProject
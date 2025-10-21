import styles from "./componentstyles/SearchProject.module.css"

function SearchProject({userSearch, updateUserSearch}) {

    return(
        <div className={styles.SearchProject}>
            <form htmlFor="projectSearch">
                <input type="text" placeholder="Search Projects" className={styles.projectsearch} id="projectSearch" value={userSearch} onChange={updateUserSearch}></input>
            </form>
        </div>
    )
}

export default SearchProject
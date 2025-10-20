import styles from "./SearchProject.module.css"
import { useState } from "react"

function SearchProject() {
    const [userSearch, setUserSearch] = useState("");

    const updateUserSearch = (e) => {
        setUserSearch(e.target.value);
    }

    return(
        <div className={styles.SearchProject}>
            <form htmlFor="projectSearch">
                <input type="text" placeholder="Search Projects" className={styles.projectsearch} id="projectSearch" value={userSearch} onChange={updateUserSearch}></input>
            </form>
        </div>
    )
}

export default SearchProject
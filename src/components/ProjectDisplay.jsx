import SearchProject from "./SearchProject"
import ProjectCards from "./ProjectCards"
import styles from "./ProjectDisplay.module.css"
import { useState } from "react";

function ProjectDisplay({data}) {
    const [userSearch, setUserSearch]=useState("");

    const updateUserSearch = (e) => {
        setUserSearch(e.target.value);
    }

    const displayData = data.filter((project) => project.title.toLowerCase().includes(userSearch.toLowerCase()));

    return(
        <div className={styles.ProjectDisplay}>
            <SearchProject userSearch={userSearch} updateUserSearch={updateUserSearch}/>
            <ProjectCards data={displayData}/>
        </div>
    )
}

export default ProjectDisplay
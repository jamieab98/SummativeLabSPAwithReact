import NewProject from "./NewProject"
import ProjectDisplay from "./ProjectDisplay"
import styles from './Body.module.css'
import projectData from "../projectData"
import { useState } from "react"

function Body() {
    const [newTitle, setNewTitle]=useState("");
    const [newDescription, setNewDescription]=useState("");
    const [data, setData]=useState(projectData);

    const updateTitle = (e) => {
        setNewTitle(e.target.value)
    };
    const updateDescription = (e) => {
        setNewDescription(e.target.value)
    };
    const submitForm = (event) => {
        event.preventDefault();
        setData([...data, {title : newTitle, description : newDescription}]);
    }

    
    return(
        <div className={styles.body}>
            <NewProject updateTitle={updateTitle} updateDescription={updateDescription} submitForm={submitForm} newTitle={newTitle} newDescription={newDescription}/>
            <ProjectDisplay data={data}/>
        </div>
    )
}

export default Body
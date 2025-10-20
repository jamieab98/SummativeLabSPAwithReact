import NewProject from "./NewProject"
import ProjectDisplay from "./ProjectDisplay"
import styles from './Body.module.css'
import projectData from "../projectData"
import { useState } from "react"

function Body() {
    const [newTitle, setNewTitle]=useState("");
    const [newDescription, setNewDescription]=useState("");
    const [newLink, setNewLink]=useState("");
    const [data, setData]=useState(projectData);

    const updateTitle = (e) => {
        setNewTitle(e.target.value)
    };
    const updateDescription = (e) => {
        setNewDescription(e.target.value)
    };
    const updateLink = (e) => {
        setNewLink(e.target.value)
    }
    const submitForm = (event) => {
        event.preventDefault();
        setData([...data, {title : newTitle, description : newDescription, link: newLink}]);
        setNewTitle("");
        setNewDescription("");
        setNewLink("");
    }
    
    return(
        <div className={styles.body}>
            <NewProject updateTitle={updateTitle} updateDescription={updateDescription} submitForm={submitForm} updateLink={updateLink} newTitle={newTitle} newDescription={newDescription} newLink={newLink}/>
            <ProjectDisplay data={data}/>
        </div>
    )
}

export default Body
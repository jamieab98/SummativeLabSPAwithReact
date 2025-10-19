import styles from './NewProject.module.css'
import { useState } from 'react'
import projectData from '../projectData'

function NewProject() {
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [data, setData] = useState(projectData);

    const updateTitle = (e) => {
        setNewTitle(e.target.value);
    };
    const updateDescription = (e) => {
        setNewDescription(e.target.value);
    };
    const submitForm = (event) => {
        event.preventDefault();
        setData([...data, {title: newTitle, description: newDescription}])
        console.log(data)
    };


    return(
        <div className={styles.NewProject}>
            <h3>Add Your Project</h3>
            <form onSubmit={submitForm}>
                <label htmlFor="projectTitle">Project Title</label>
                <input type="text" onChange={updateTitle} placeholder='Title of Project' id="projectTitle" value={newTitle} className={styles.titleform}></input>
                <label htmlFor="projectDescription">Description of Project</label>
                <textarea onChange={updateDescription} placeholder="Description of the project" id="projectDescription" value={newDescription}className={styles.descriptionform}></textarea>
                <button type="submit">Add Project</button>
            </form>
        </div>
    )
}

export default NewProject
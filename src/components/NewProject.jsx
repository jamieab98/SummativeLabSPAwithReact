import styles from './NewProject.module.css'

function NewProject({submitForm, updateTitle, updateDescription, newTitle, newDescription}) {

    return(
        <div className={styles.NewProject}>
            <h3>Add Your Project</h3>
            <form onSubmit={submitForm}>
                <label htmlFor="projectTitle">Project Title</label>
                <input type="text" onChange={updateTitle} placeholder='Title of Project' id="projectTitle" value={newTitle} className={styles.titleform}></input>
                <label htmlFor="projectDescription">Description of Project</label>
                <textarea onChange={updateDescription} placeholder="Description of the project" id="projectDescription" value={newDescription}className={styles.descriptionform}></textarea>
                <label htmlFor="link">Link</label>
                <input type="text" placeholder="Link to acces the Project" id="link" className={styles.linkform}></input>
                <button type="submit">Add Project</button>
            </form>
        </div>
    )
}

export default NewProject
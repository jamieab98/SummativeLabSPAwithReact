import styles from './NewProject.module.css'


function NewProject() {
    return(
        <div className={styles.NewProject}>
            <h3>Add Your Project</h3>
            <form>
                <div>Project Title</div>
                <input type="text" placeholder='Title of Project' className={styles.titleform}></input>
                <div>Description of Project</div>
                <textarea placeholder="Description of the project" className={styles.descriptionform}></textarea>
                <button type="submit">Add Project</button>
            </form>
        </div>
    )
}

export default NewProject
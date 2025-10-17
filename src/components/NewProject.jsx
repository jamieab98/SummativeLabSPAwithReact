import styles from './NewProject.module.css'


function NewProject() {
    return(
        <div className={styles.NewProject}>
            <h3>Add Your Project</h3>
            <h4>Project Title</h4>
            <form>
                <input type="text" placeholder='Title of Project' className={styles.titleform}></input>
            </form>
            <div>Description of Project</div>
            <form>
                <textarea placeholder="Description of the project" className={styles.descriptionform}></textarea>
            </form>
            <div>Button to add Project</div>
        </div>
    )
}

export default NewProject
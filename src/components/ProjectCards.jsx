import projectData from "../projectData"

function ProjectCards() {
    return(
        <>
            {projectData.map((project) => (
                <div>
                    <div>
                        <button>Click to go to the project</button>
                    </div>
                    <div>
                        <h4>{project.title}</h4>
                        <div>{project.description}</div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProjectCards
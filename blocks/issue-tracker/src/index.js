import "./index.scss"
import {useState} from '@wordpress/element';
import Project from "./components/project/project";
import ProjectEdit from "./components/project-edit/project-edit";

wp.blocks.registerBlockType("soli/issue-tracker", {
    title: "Issue tracker",
    icon: "backup",
    category: "development",
    supports: {
        // Declare support for block's alignment.
        // This adds support for all the options:
        // left, center, right, wide, and full.
        align: true
    },
    attributes: {
        projects: [{
            title: "string",
            description: "string",
            context: {
                enum: ["block", "api", "tool", "update"],
            },
            status: "string",
            color: "string",
            github: "string",
            penpot: "string"
        }]
    },
    edit: EditComponent,
    save: SaveComponent,
})

function EditComponent({attributes, setAttributes}) {
    const [projects, setProjects] = useState(attributes.projects ?? []);

    const updateProject = async (index, project) => {
        let newProjects = [...projects];
        newProjects[index] = project;
        setProjects(newProjects);
        setAttributes({projects: newProjects})
    };

    const deleteProject = async (index) => {
        let newProjects = projects.filter((_, i) => i !== index);
        setProjects(newProjects);
        setAttributes({projects: newProjects})
    };

    const newProject = () => {
        const updatedProjects = [
            ...projects,
            {
                title: "",
                description: "",
                context: "",
                status: "",
                color: getRandomColor(),
                github: "",
                penpot: ""
            }];
        setProjects(updatedProjects);
        setAttributes({projects: updatedProjects});
    };

    const move = (index, direction) => {
        let newOrder = [...projects];
        if (direction > 0) { // down
            console.log("down");
            swapProjects(newOrder, index, index+1)
        } else { // up
            console.log("up");
            swapProjects(newOrder, index-1, index)
        }
        setProjects(newOrder);
        setAttributes({projects: newOrder});
    }

    const swapProjects = (arr, indexA, indexB) => {
        const temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div className="soli-block-issue-tracker">
            {projects && projects.map((project, i) => {
                    return (
                        <ProjectEdit key={"project-" + i}
                                     project={project}
                                     onChange={(up) => updateProject(i, up)}
                                     onDelete={() => deleteProject(i)}
                                     move={(dir) => move(i, dir)}
                        />
                    );
                }
            )}
            <a className="new-project" onClick={newProject}>Nieuw Project+</a>
        </div>)
}

function SaveComponent({attributes}) {
    const projects = attributes.projects ?? [];

    return (
        <div className="soli-block-issue-tracker">
            {projects && projects.map((project, i) => {
                    return (
                        <Project key={"project-" + i}
                                 project={project}/>
                    );
                }
            )}
        </div>)
}



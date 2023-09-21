import "./project-edit.scss";
import ContentEdit from "../content-edit/content-edit";

export default function ProjectEdit({project, onChange, onDelete, move}) {
    return (
        <div className={"project"}>
            <div className={"empty"}/>
            <div className={"line"}>
                <div style={{background: project.color}}/>
            </div>
            <div className={"item"}>
                <div className={"branch"}>
                    <div className={"hline"}/>
                </div>
                <div className={"move up"} onClick={()=> move(-1)}/>
                <div className={"move down"} onClick={() => move(1)}/>
                <ContentEdit
                    project={project}
                    onChange={onChange}
                    onDelete={onDelete}
                />
            </div>
        </div>
    );
}

import "./project.scss";
import Content from "../content/content";

export default function Project({project}) {
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
                <Content
                    project={project}
                />
            </div>
        </div>
    );
}

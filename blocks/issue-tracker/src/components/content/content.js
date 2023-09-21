import "./content.scss";
import github from "../../../assets/img/github.png";
import penpot from "../../../assets/img/penpot.png";
import ContextImage from "../context-image/context-image";

export default function Content({project}) {

    return (
        <>
            <div className={"content"}>
                <div className={"deadline"}
                     style={{background: project.color}}>
                    <div>{project.status}</div>
                </div>
                <div className={"info"}>
                    <h4 className={"title"} style={{color: project.color}}>{project.title}</h4>
                    <p className={"description"}>{project.description}</p>
                    <div className={"links"}>
                        <div>
                            <img src={github}/>
                            <a href={project.github} rel="external noopener" target="_blank">Github</a>
                        </div>
                        <div>
                            <img src={penpot}/>
                            <a href={project.penpot} rel="external noopener" target="_blank">Penpot</a>
                        </div>
                    </div>
                </div>
                <div className={"context"}>
                    <ContextImage context={project.context}/>
                </div>
            </div>
        </>
    );
}

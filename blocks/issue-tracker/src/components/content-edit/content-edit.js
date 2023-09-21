import "./content-edit.scss";
import {useState, useEffect} from '@wordpress/element';
import github from "../../../assets/img/github.png";
import penpot from "../../../assets/img/penpot.png";
import ContextImage from "../context-image/context-image";
import ColorPickerPopup from "../color-picker-popup/color-picker-popup";

export default function ContentEdit({project, onChange, onDelete}) {
    const [status, setStatus] = useState(project.status);
    const [context, setContext] = useState(project.context);
    const [color, setColor] = useState(project.color);
    const [content, setContent] = useState(project);

    useEffect(()=>{
        setStatus(project.status);
        setContext(project.context);
        setColor(project.color);
        setContent(project);
    }, [project]);

    const changeTitle = (newTitle) => {
        const newContent = {...content, title: newTitle};
        setContent(newContent);
        onChange(newContent);
    };

    const changeDescription = (newDescription) => {
        const newContent = {...content, description: newDescription};
        setContent(newContent);
        onChange(newContent);
    };

    const changeStatus = (newStatus) => {
        setStatus(newStatus);
        const newContent = {...content, status: newStatus};
        setContent(newContent);
        onChange(newContent)
    };

    const changeGithub = (newGithub) => {
        const newContent = {...content, github: newGithub};
        setContent(newContent);
        onChange(newContent);
    };

    const changePenpot = (newPenpot) => {
        const newContent = {...content, penpot: newPenpot};
        setContent(newContent);
        onChange(newContent);
    };

    const changeContext = (newContext) => {
        setContext(newContext);
        const newContent = {...content, context: newContext};
        setContent(newContent)
        onChange(newContent)
    };

    const changeColor = (newColor) => {
        setColor(newColor);
        const newContent = {...content, color: newColor};
        setContent(newContent)
        onChange(newContent)
    };

    return (
        <>
            <div className={"content"}>
                <div className={"deadline"}
                     style={{background: color}}>
                    <div>{status}</div>
                </div>
                <div className={"info"}>
                    <ColorPickerPopup
                        color={color}
                        onChange={changeColor}
                    />
                    <input className={"title"}
                           placeholder="Titel..."
                           onChange={(e) => changeTitle(e.target.value)}
                           value={project.title}
                           type="text"
                           style={{color: color}}
                    />
                    <input className={"status"}
                           placeholder="Status..."
                           onChange={(e) => changeStatus(e.target.value)}
                           value={status}
                           type="text"
                           style={{background: color}}
                    />
                    <textarea className={"Omschrijving"}
                        name="Text1"
                        placeholder="Description..."
                        onChange={(e) => changeDescription(e.target.value)}
                        value={project.description}
                        cols="40"
                        rows="5"/>
                    <div className={"links"}>
                        <div>
                            <img src={github}/>
                            <input
                               placeholder="Github url..."
                               onChange={(e) => changeGithub(e.target.value)}
                               value={project.github}
                               type="text"
                            />
                        </div>
                        <div>
                            <img src={penpot}/>
                            <input
                                placeholder="Penpot url..."
                                onChange={(e) => changePenpot(e.target.value)}
                                value={project.penpot}
                                type="text"
                            />
                        </div>
                    </div>
                </div>
                <div className={"context"}>
                    <ContextImage context={context}/>

                    <select
                        value={context ?? "block"}
                        onChange={(e) => changeContext(e.target.value)}
                    >
                        <option value={"block"}>block</option>
                        <option value={"api"}>api</option>
                        <option value={"tool"}>tool</option>
                        <option value={"update"}>update</option>
                    </select>
                    <div className={"delete"} onClick={onDelete}/>
                </div>
            </div>
        </>
    );
}

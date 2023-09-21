import folderSettings from "../../../assets/img/folder settings.svg";
import creativeCloud from "../../../assets/img/creative cloud.svg";
import extension from "../../../assets/img/extension.svg";
import palette from "../../../assets/img/palette.svg";

export default function ContextImage({context}) {
    let contextImage;
    switch (context) {
        case "block":
            contextImage = folderSettings;
            break;
        case "api":
            contextImage = creativeCloud;
            break;
        case "tool":
            contextImage = extension;
            break;
        case "update":
            contextImage = palette;
            break;
    }

    return (
        <img src={contextImage}/>
    );
}
